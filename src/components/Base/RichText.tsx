import tw, { styled } from 'twin.macro';

// Use this component to wrap content that needs global max-width
export const RichText = styled.div`
  ${tw`w-full m-0`}

  h1 {
    ${tw`text-3xl lg:text-4xl`}
  }

  h2 {
    ${tw`text-2xl`}
  }

  h3 {
    ${tw`text-xl`}
  }

  h4 {
    ${tw`text-lg`}
  }
  > div {
    ${tw`mb-4 lg:mb-8`}
  }
  p {
    ${tw`line-height[150%] empty:mb-4`}
  }
`;
