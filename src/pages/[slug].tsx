import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import {
  getPageSchema,
  PAGES_QUERY,
  PAGE_QUERY,
  TEMPLATE_QUERY,
} from '@uidu/api.js/react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import BlocksParser from '../components/BlocksParser';
import MaintenancePage from '../components/Base/MaintenancePage';
import 'twin.macro';
import { findByShortname } from '../utils/common';
import { PreviewModeAlert } from '../components/Base/PreviewModeAlert';
import { getGlobals } from '../utils/getGlobals';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  cache: new InMemoryCache(),
});

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export default function Page({
  page,
  loading,
  isInMaintenanceMode = false,
  preview,
  previewData,
}) {
  if (!page)
    return (
      <div tw="flex items-center justify-center w-screen h-screen">
        <h1>Empty website</h1>
      </div>
    );
  const maintenanceBlock = page.blocks?.find(
    (block) => block?.block?.shortname === 'modalita-manutenzione',
  );

  if (isInMaintenanceMode && process.env.NODE_ENV !== 'development')
    return <MaintenancePage fields={maintenanceBlock?.fields} />;

  const blocks = page?.blocks ?? [];

  return (
    <>
      <NextSeo title={page?.name} />
      <BlocksParser blocks={blocks} />
      {!!preview && <PreviewModeAlert />}
    </>
  );
}

export async function getStaticPaths() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const generator = 'menu';
  const privacyTemplate = 'Z2lkOi8vdWlkdS9UZW1wbGF0ZS80OQ';

  // Call an external API endpoint to get pages
  const res = await client.query({
    query: gql(PAGES_QUERY),
    variables: { projectId, slug: generator },
  });

  const privacyRes = await client.query({
    query: gql(TEMPLATE_QUERY),
    variables: { projectId, templateId: privacyTemplate },
  });

  if (!res) return;

  const pagesGenerator = res?.data?.currentWorkspace?.project?.page;
  const privacyPages = !!privacyRes
    ? privacyRes?.data?.currentWorkspace?.project?.template?.pages
    : [];

  const slugs = [];

  pagesGenerator?.pageBlocks?.map((pageBlock) => {
    const primarySlug = pageBlock.fields
      ?.find((field) => field.shortname === 'slug')
      ?.content?.value.replace(/\//g, '');

    if (!!primarySlug?.length) slugs.push(primarySlug);
  });

  privacyPages.map((page) => slugs.push(page.slug));

  // Get the paths we want to pre-render based on filtered pages
  const paths = slugs?.map((slug) => {
    return {
      params: { slug: slug },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData = null,
}) => {
  let loading = true;

  const res = await client.query({
    query: gql(PAGE_QUERY),
    variables: { slug: !!params.slug ? params.slug : 'index', projectId },
  });

  if (!res) return;

  const maintenanceRes = await client.query({
    query: gql(PAGE_QUERY),
    variables: { slug: 'impostazioni-globali', projectId },
  });

  const maintenancePage =
    getPageSchema(maintenanceRes?.data?.currentWorkspace?.project?.page) ??
    null;
  const maintenanceBlock = maintenancePage.blocks?.find(
    (block) => block?.block?.shortname === 'modalita-manutenzione',
  );
  const isInMaintenanceMode =
    (process.env.NODE_ENV !== 'development' &&
      findByShortname(maintenanceBlock?.fields, 'manutenzione-attiva')?.content
        ?.value) ??
    null;

  const page = isInMaintenanceMode
    ? maintenancePage
    : getPageSchema(res?.data?.currentWorkspace?.project?.page);

  const { footer, menu } = await getGlobals();

  loading = false;
  return {
    revalidate: 1,
    props: {
      page,
      loading,
      isInMaintenanceMode,
      preview,
      menu,
      footer,
      previewData,
    },
  };
};
