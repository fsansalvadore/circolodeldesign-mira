import tw from 'twin.macro';
import { CookieBanner } from '../components/Base';
import LoadingSkeleton from '../components/Base/LoadingSkeleton';
import { Footer, MainNavigation } from '../components/Blocks';

const Main = tw.main`relative w-full overflow-hidden mt-6 lg:mt-10`;

interface Props {
  loading?: boolean;
}

const DefaultPage: React.FC<Props> = ({ loading = false, children }) => {
  return (
    <>
      <Main>
        <CookieBanner />
        {loading ? <LoadingSkeleton /> : children}
      </Main>
    </>
  );
};

export default DefaultPage;
