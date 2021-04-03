import Seo from 'components/Seo';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;
interface ContainerProps {
  children: JSX.Element;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-auto min-h-screen bg-yellow-100 flex items-center justify-center">
      <div className="bg-secondary-color lg:container p-4" style={{ borderRadius: 40 }}>
        <Title>My page</Title>
        <Seo />
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Container;
