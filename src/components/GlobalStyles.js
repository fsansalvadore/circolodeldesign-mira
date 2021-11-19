import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`text-base antialiased overflow-x-hidden overscroll-y-none`}
    font-family: 'Poppins', sans-serif;
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
    font-family: 'Poppins', sans-serif !important;
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
