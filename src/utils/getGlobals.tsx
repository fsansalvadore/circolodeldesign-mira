import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getPageSchema, PAGE_QUERY } from '@uidu/api.js/react';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  cache: new InMemoryCache(),
});

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const getMenu = async () => {
  const res = await client.query({
    query: gql(PAGE_QUERY),
    variables: { projectId, slug: 'menu' },
  });

  if (!res) return;

  const menu = getPageSchema(res?.data?.currentWorkspace?.project?.page);

  return menu;
};

const getFooter = async () => {
  const res = await client.query({
    query: gql(PAGE_QUERY),
    variables: { projectId, slug: 'footer' },
  });

  if (!res) return;

  const footer = getPageSchema(res?.data?.currentWorkspace?.project?.page);

  return footer;
};

export const getGlobals = async () => {
  const menu = await getMenu();
  const footer = await getFooter();
  return { menu, footer };
};
