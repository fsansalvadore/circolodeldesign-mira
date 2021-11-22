import tw, { styled } from 'twin.macro';

// Use this component to wrap content that needs global max-width
export const MaxWidthContent = styled.div`
  ${tw`w-full mx-auto max-w-screen-xl box-border px-4 lg:px-8`}
`;
