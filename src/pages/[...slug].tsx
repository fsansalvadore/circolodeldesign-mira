import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import {
  getPageSchema,
  // PAGES_QUERY,
  PAGE_QUERY,
  TEMPLATE_QUERY,
} from '@uidu/api.js/react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import 'twin.macro';
import MaintenancePage from '../components/Base/MaintenancePage';
import { PreviewModeAlert } from '../components/Base/PreviewModeAlert';
import BlocksParser from '../components/BlocksParser';
import { findByShortname } from '../utils/common';
import { getGlobals } from '../utils/getGlobals';

const PAGES_QUERY = `
  query PagesQuery($projectId: ID!, $slug: String!) {
    currentWorkspace {
      name
      project(id: $projectId) {
        page(slug: $slug) {
          pageBlocks {
            fieldValues {
              content
              field {
                id
                shortname
                preferences
                content
              }
            }
            fields {
              shortname
              content
            }
          }
        }
        pages {
          edges {
            node {
              slug
            }
          }
        }
      }
    }
  }
`;

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
        title={page?.name}
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

export async function getStaticPaths() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const generator = 'menu';
  const researchesTemplate = 'Z2lkOi8vdWlkdS9UZW1wbGF0ZS80Nw';

  // Call an external API endpoint to get pages
  const res = await client.query({
    query: gql(PAGES_QUERY),
    variables: { projectId, slug: generator },
  });
  const researchesRes = await client.query({
    query: gql(TEMPLATE_QUERY),
    variables: { projectId, templateId: researchesTemplate },
  });

  if (!res) return;

  const pagesGenerator = res?.data?.currentWorkspace?.project?.page;
  const researchPages = !!researchesRes
    ? researchesRes?.data?.currentWorkspace?.project?.template?.pages
    : [];

  const slugs = [];

  pagesGenerator?.pageBlocks?.map((pageBlock) => {
    const primarySlug = pageBlock.fieldValues
      ?.find((fvo) => fvo.field?.shortname === 'slug')
      ?.content?.value.replace(/\//g, '');

    if (!primarySlug?.length) return;

    if (
      !!pageBlock.fieldValues?.find(
        (fvo) => fvo.field.shortname === 'menu-secondario',
      )?.content?.items?.length
    ) {
      // Create primary page
      if (!slugs.includes(primarySlug)) slugs.push(primarySlug);

      // Create secondary pages
      pageBlock.fieldValues
        ?.find((fvo) => fvo.field.shortname === 'menu-secondario')
        ?.content?.items.map((secondaryNavItem) => {
          const secondarySlug = secondaryNavItem.fields?.find(
            (field) => field.shortname === 'slug',
          )?.content?.value;

          slugs.push(`${primarySlug}/${secondarySlug}`);
        });
    } else {
      slugs.push(primarySlug);
    }
  });

  researchPages.map((page) => slugs.push(`ricerche/${page.slug}`));

  // Get the paths we want to pre-render based on filtered pages
  const paths = slugs?.map((slug) => ({
    params: {
      slug: slug.toString().split('/'),
    },
  }));

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
