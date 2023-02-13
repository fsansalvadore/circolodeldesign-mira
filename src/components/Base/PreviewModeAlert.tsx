import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import NextHead from 'next/head';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { Link } from '.';
import { XCircleIcon } from '@heroicons/react/outline';

const Wrapper = tw.div`fixed z-100 bottom-0 left-0 right-0 w-full px-4 py-5 bg-gray-200 text-black! text-center`;

export const PreviewModeAlert: React.FC = () => {
  return (
    <Wrapper>
      <Link
        href="/api/exit-preview"
        tw="flex space-x-6 justify-center items-center hover:underline"
      >
        <XCircleIcon tw="w-10 h-10" />
        <span>Esci dalla modalità Anteprima</span>
      </Link>
    </Wrapper>
  );
};
