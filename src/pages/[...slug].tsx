import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getPageSchema, PAGES_QUERY, PAGE_QUERY } from '@uidu/api.js/react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import BlocksParser from '../components/BlocksParser';
import MaintenancePage from '../components/Base/MaintenancePage';
import { findByShortname } from '../utils/common';
import { PreviewModeAlert } from '../components/Base/PreviewModeAlert';
import { getGlobals } from '../utils/getGlobals';
import { Footer, MainNavigation } from '../components/Blocks';

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
  menu,
  footer,
}) {
  const maintenanceBlock = page.blocks?.find(
    (block) => block?.block?.shortname === 'modalita-manutenzione',
  );

  if (isInMaintenanceMode)
    return <MaintenancePage fields={maintenanceBlock?.fields} />;

  const blocks = page?.blocks;

  return (
    <>
      <NextSeo title={page?.name} />
      {menu && <MainNavigation menu={menu} />}
      <BlocksParser blocks={blocks} />
      {footer && <Footer footer={footer} />}
      {preview && <PreviewModeAlert />}
    </>
  );
}

export async function getStaticPaths() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const generator = 'menu';

  // Call an external API endpoint to get pages
  const res = await client.query({
    query: gql(PAGES_QUERY),
    variables: { projectId, slug: generator },
  });
  if (!res) return;

  const pagesGenerator = res?.data?.currentWorkspace?.project?.page;

  const slugs = [];

  pagesGenerator?.pageBlocks?.map((pageBlock) => {
    const primarySlug = pageBlock.fields
      ?.find((field) => field.shortname === 'slug')
      ?.content.value.replace(/\//g, '');

    if (
      !!pageBlock.fields?.find((field) => field.shortname === 'menu-secondario')
        ?.content?.items?.length
    ) {
      pageBlock.fields
        ?.find((field) => field.shortname === 'menu-secondario')
        ?.content.items.map((secondaryNavItem) => {
          const secondarySlug = secondaryNavItem.fields?.find(
            (field) => field.shortname === 'slug',
          )?.content?.value;

          slugs.push(`${primarySlug}/${secondarySlug}`);
        });
    }
  });

  // Get the paths we want to pre-render based on filtered pages
  const paths = slugs?.map((slug) => {
    const split = slug.toString().split('/');
    const parent = split[0];
    const child = split[split.length - 1];

    return {
      params: { slug: [parent, child] },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  let loading = true;

  const slug = params?.slug[params.slug.length - 1] ?? params?.slug[0];

  const res = await client.query({
    query: gql(PAGE_QUERY),
    variables: { slug, projectId },
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
    findByShortname(maintenanceBlock?.fields, 'manutenzione-attiva')?.content
      ?.value ?? null;

  const page = isInMaintenanceMode
    ? maintenancePage
    : getPageSchema(res?.data?.currentWorkspace?.project?.page);

  const { menu, footer } = await getGlobals();

  loading = false;
  return {
    revalidate: 1,
    props: { page, loading, isInMaintenanceMode, preview, menu, footer },
  };
};
