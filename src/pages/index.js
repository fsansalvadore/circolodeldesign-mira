import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getPageSchema, PAGE_QUERY } from '@uidu/api.js/react';
import { NextSeo } from 'next-seo';
import BlocksParser from '../components/BlocksParser';
import MaintenancePage from '../components/Base/MaintenancePage';
import { PreviewModeAlert } from '../components/Base/PreviewModeAlert';
import { findByShortname } from '../utils/common';
import 'twin.macro';
import { getGlobals } from '../utils/getGlobals';
import { Footer, MainNavigation } from '../components/Blocks';

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
  menu = null,
  footer = null,
  previewData = null,
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

  if (isInMaintenanceMode)
    return <MaintenancePage fields={maintenanceBlock?.fields} />;

  const blocks = page?.blocks;

  return (
    <>
      <NextSeo title={page?.name ?? 'Home Page'} />
      {!!menu && <MainNavigation menu={menu} />}
      <BlocksParser blocks={blocks} />
      {!!footer && <Footer footer={footer} />}
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
