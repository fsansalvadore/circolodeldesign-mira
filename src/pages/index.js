import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getPageSchema, PAGE_QUERY } from '@uidu/api.js/react';
import { NextSeo } from 'next-seo';
import BlocksParser from '../components/BlocksParser';
import MaintenancePage from '../components/Base/MaintenancePage';
import { PreviewModeAlert } from '../components/Base/PreviewModeAlert';
import { findByShortname } from '../utils/common';
import 'twin.macro';
import { getGlobals } from '../utils/getGlobals';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  cache: new InMemoryCache(),
});

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export default function Index({
  page = null,
  loading = false,
  isInMaintenanceMode = false,
  preview = false,
  previewData = null,
  settings = null,
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
  const seoBlock = settings.blocks?.find(
    (block) => block?.block?.shortname === 'seo',
  );

  const metaDescription =
    findByShortname(seoBlock?.fields, 'meta-description')?.content?.value ?? '';
  const metaKeywords =
    findByShortname(seoBlock?.fields, 'meta-keywords')?.content?.value ?? '';
  const metaImage =
    findByShortname(seoBlock?.fields, 'meta-image')?.content?.value?.url ?? '';
  const favicon =
    findByShortname(seoBlock?.fields, 'favicon')?.content?.value?.url ?? '';

  if (isInMaintenanceMode && process.env.NODE_ENV !== 'development')
    return <MaintenancePage fields={maintenanceBlock?.fields} />;

  const blocks = page?.blocks ?? [];

  return (
    <>
      <NextSeo
        title={page?.name ?? 'Home Page'}
        description={metaDescription}
        keywords={metaKeywords}
        openGraph={{
          type: 'website',
          images: [{ url: metaImage }],
        }}
        images={[metaImage]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: favicon,
          },
          {
            rel: 'apple-touch-icon',
            href: favicon,
            sizes: '76x76',
          },
        ]}
      />
      <BlocksParser blocks={blocks} />
      {!!preview && <PreviewModeAlert />}
    </>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  let loading = true;

  const res = await client.query({
    query: gql(PAGE_QUERY),
    variables: { slug: 'index', projectId },
  });

  if (!res)
    return {
      revalidate: 1,
      props: {
        page: {
          name: 'index',
          slug: 'index',
        },
        loading: false,
        isInMaintenanceMode: false,
        preview: false,
        menu: null,
        footer: null,
      },
    };

  const settingsRes = await client.query({
    query: gql(PAGE_QUERY),
    variables: { slug: 'impostazioni-globali', projectId },
  });

  const settingsPageData =
    getPageSchema(settingsRes?.data?.currentWorkspace?.project?.page) ?? null;

  const maintenanceBlock = settingsPageData.blocks?.find(
    (block) => block?.block?.shortname === 'modalita-manutenzione',
  );
  const isInMaintenanceMode =
    (process.env.NODE_ENV !== 'development' &&
      findByShortname(maintenanceBlock?.fields, 'manutenzione-attiva')?.content
        ?.value) ??
    null;

  const page = isInMaintenanceMode
    ? settingsPageData
    : getPageSchema(res?.data?.currentWorkspace?.project?.page);

  const { menu, footer } = await getGlobals();

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
      settings: settingsPageData,
    },
  };
};
