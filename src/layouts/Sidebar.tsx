import Link from "components/Link";

interface SidebarProps {}
const Sidebar:React.FC<SidebarProps>=() => (
  <ul>
    <li>
      <Link activeClassName="active"  href="/">
        <a className="text-white hover:text-red-500">Home</a>
      </Link>
    </li>
    <li>
      <Link activeClassName="active" href="/progress">
        <a>Progress</a>
      </Link>
    </li>
    <li>
      <Link activeClassName="active" href="/message">
        <a>Message</a>
      </Link>
    </li>
    <li>
      <Link activeClassName="active" href="/settings">
        <a>Settings</a>
      </Link>
    </li>
  </ul>
);
export default Sidebar