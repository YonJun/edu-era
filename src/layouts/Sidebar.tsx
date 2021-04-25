import Link from 'components/Link';
import { Fragment } from 'react';

interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = () => (
  <Fragment>
    <div className="bg-red-500 pl-4 text-white text-3xl flex items-center h-40">
      <Link href="/">
        <a>
          <div className="font-bold w-20 h-20 text-center bg-secondary-light rounded-3xl" style={{ lineHeight: '5rem' }}>
            E
          </div>
        </a>
      </Link>
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
    <ul className="mt-20 pl-4">
      <li>
        <Link activeClassName="active" href="/">
          <div className="inverted-border-radius">
            <a className="link">Home</a>
          </div>
        </Link>
      </li>
      <li>
        <Link activeClassName="active" href="/progress">
          <div className="inverted-border-radius">
            <a className="link">Progress</a>
          </div>
        </Link>
      </li>
      <li>
        <Link activeClassName="active" href="/message">
          <div className="inverted-border-radius">
            <a className="link">Message</a>
          </div>
        </Link>
      </li>
      <li>
        <Link activeClassName="active" href="/settings">
          <div className="inverted-border-radius">
            <a className="link">Settings</a>
          </div>
        </Link>
      </li>
    </ul>
  </Fragment>
);
export default Sidebar;
