import Link from 'components/Link';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons';
import { faChartBar, faComment } from '@fortawesome/free-regular-svg-icons';

const ListLinks = [
  { Icon: faHome, label: 'Home', to: '/' },
  { Icon: faChartBar, label: 'Progress', to: '/progress' },
  { Icon: faComment, label: 'Message', to: '/Message' },
  { Icon: faCog, label: 'Settings', to: '/Settings' },
];

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
      {ListLinks.map((link) => (
        <li key={link.label}>
          <Link activeClassName="active" href={link.to}>
            <div className="inverted-border-radius">
              <a className="link pl-4  flex items-center">
                <FontAwesomeIcon icon={link.Icon} />
                <p className="pl-2">{link.label}</p>
              </a>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
);
export default Sidebar;
