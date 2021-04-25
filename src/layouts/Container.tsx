import Seo from 'components/Seo';
import Sidebar from './Sidebar';

interface ContainerProps {
  children: JSX.Element;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mt-12 flex items-center justify-center">
      <div className="box-border bg-secondary-main p-5" style={{ borderRadius: 40, width: 1000 }}>
        <Seo />
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9 bg-white rounded-3xl	p-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
