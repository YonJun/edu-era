import Link from 'components/Link';

interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = () => (
  <div className="bg-green-500">
    <div className=" pt-10 text-white text-3xl bg-red-500 flex">
      <div className="">
        <Link href="/">
          <a>
            <div className="font-bold w-20 h-20 text-center bg-secondary-light rounded-3xl" style={{ lineHeight: '5rem' }}>
              E
            </div>
          </a>
        </Link>
      </div>
      <div className="pl-4" style={{ lineHeight: '5rem' }}>
        <Link href="/">
          <a>
            <p className="font-bold">
              Edu<span className="font-semibold">Era</span>
            </p>
          </a>
        </Link>
      </div>
    </div>
    <ul className="mt-20">
      <li>
        <Link activeClassName="active" href="/">
          <a className="text-white hover:text-red-500">Home</a>
        </Link>
      </li>
      <li>
        <Link activeClassName="active" href="/progress">
          <a className="bg-primary-main">Progress</a>
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
  </div>
);
export default Sidebar;
