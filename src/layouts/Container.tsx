import Seo from 'components/Seo';
import Sidebar from './Sidebar';

interface ContainerProps {
  children: JSX.Element;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-auto min-h-screen bg-yellow-100 flex items-center justify-center">
      <div className="bg-secondary-main p-5" style={{ borderRadius: 40, width: 1000 }}>
        <Seo />
        <div className="grid grid-cols-12">
          <div className="col-span-3 bg-green-600">
            <Sidebar />
          </div>
          <div className="col-span-9  bg-green-700">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
