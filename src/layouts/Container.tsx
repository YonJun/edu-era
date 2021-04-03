import Seo from "components/Seo";
import Sidebar from "./Sidebar";

interface ContainerProps {}
const Container: React.FC<ContainerProps> = ({ children }) => (
  <div>
    <Seo />
    <Sidebar />
    {children}
  </div>
);

export default Container;
