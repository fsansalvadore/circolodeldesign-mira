import 'twin.macro';
import Skeleton from 'react-loading-skeleton';
import { MaxWidthContent } from '.';

const LoadingSkeleton: React.FC = () => {
  return (
    <div tw="min-h-screen">
      <Skeleton tw="h-16 rounded-none" />
      <MaxWidthContent tw="my-20 lg:mt-40">
        <Skeleton tw="h-16 mt-20 lg:mt-40" delay={0.1} duration={1} />
        <Skeleton tw="h-16 mt-20 lg:mt-40" delay={0.2} duration={1} />
        <Skeleton tw="h-16 my-20 lg:my-40" delay={0.3} duration={1} />
      </MaxWidthContent>
    </div>
  );
};

export default LoadingSkeleton;
