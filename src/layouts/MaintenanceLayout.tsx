import tw, { styled } from 'twin.macro';

const Main = styled.main`
  ${tw`w-full h-screen overflow-hidden flex flex-col items-center justify-center space-y-10 lg:space-y-60 text-center`}
`;

interface Props {
  fields?: any[];
}

const MaintenancePage: React.FC<Props> = ({ fields, children }) => {
  return <Main>{children}</Main>;
};

export default MaintenancePage;
