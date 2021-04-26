import Link from 'components/Link';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons';
import { faChartBar, faComment } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

const ListLinks = [
  { Icon: faHome, label: 'Home', to: '/' },
  { Icon: faChartBar, label: 'Progress', to: '/progress' },
  { Icon: faComment, label: 'Message', to: '/Message' },
  { Icon: faCog, label: 'Settings', to: '/Settings' },
];

const SQUARE = 65;
interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = () => (
  <Fragment>
    <div className="pl-4 text-white text-2xl flex items-center h-40">
      <Link href="/">
        <a>
          <div
            className="font-bold text-center bg-secondary-light rounded-3xl"
            style={{ lineHeight: `${SQUARE}px`, width: SQUARE, height: SQUARE }}
          >
            E
          </div>
        </a>
      </Link>
      <div className="pl-4" style={{ lineHeight: `${SQUARE}px` }}>
        <Link href="/">
          <a>
            <p className="font-bold">
              Edu<span className="font-normal">Era</span>
            </p>
          </a>
        </Link>
      </div>
    </div>
    <ul className="mt-20 pl-4">
      {ListLinks.map((link) => (
        <li key={link.label}>
          <Link activeClassName="active text-secondary-light" href={link.to}>
            <div className="inverted-border-radius">
              <a className="link pl-4 flex items-center cursor-pointer">
                <FontAwesomeIcon className="text-gray-400" icon={link.Icon} />
                <p className="pl-2 text-white">{link.label}</p>
              </a>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    <div className="bg-secondary-main m-auto mt-24 rounded-3xl p-6" style={{ width: 200 }}>
      <div className="absoute bg-secondary-light">
        <Image src="/user.svg" height="auto" width="100%" />
      </div>
    </div>
  </Fragment>
);
export default Sidebar;
