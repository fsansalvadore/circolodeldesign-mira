import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import tw from 'twin.macro';
import { Link, MaxWidthContent } from '../components/Base';

const Headline = tw.h1`text-center font-bold text-base mx-auto mb-20 lg:(text-lg mb-20)`;

const ErrorWrapper = tw.div`min-height[400px] height[50vh] mt-5 lg:mt-10 lg:height[75vh] flex flex-col items-center justify-center`;
const ButtonWrapper = tw.div``;

const Error: NextPage = () => {
  return (
    <>
      <NextSeo title="Pagina non trovata" />
      <>
        <MaxWidthContent>
          <ErrorWrapper>
            <Headline>Non abbiamo trovato la pagina che cercavi.</Headline>
            <ButtonWrapper>
              <Link href="/">Torna alla home page</Link>
            </ButtonWrapper>
          </ErrorWrapper>
        </MaxWidthContent>
      </>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Error;
