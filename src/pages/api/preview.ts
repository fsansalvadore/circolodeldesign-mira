import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getPageSchema, PAGE_QUERY } from '@uidu/api.js/react';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  cache: new InMemoryCache(),
});

const handler = async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.NEXT_PUBLIC_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  // const post = await getPostBySlug(req.query.slug);
  const apolloRes = await client.query({
    query: gql(PAGE_QUERY),
    variables: { slug: req.query.slug, projectId },
  });

  if (!apolloRes) return;

  // const page = getPageSchema(apolloRes?.data?.currentWorkspace?.project?.page);
  const page = apolloRes?.data?.currentWorkspace?.project?.page;

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(page.slug);
  // res.writeHead(307, { Location: `/${page.slug}` });
  res.end();
};

export default handler;
