import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  :root {
    --mira-blue: 26, 122, 222;
    --mira-green: 16, 100, 85;
    --mira-orange: 231, 83, 35;
    --mira-fucsia: 231, 26, 205;
  }

  * {
    box-sizing: border-box;
  }

  body {
    ${tw`text-base p-0 m-0 antialiased overflow-x-hidden overscroll-y-none`}
    font-family: 'Space Grotesk', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    ${tw`font-bold`}
  }

  &:-webkit-autofill::first-line,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    /* css for inputs on autocomplete
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1.6rem !important;
    line-height: 1.25 !important; */
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
