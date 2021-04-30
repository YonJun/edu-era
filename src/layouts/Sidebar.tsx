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
        <li key={link.label} className="flex justify-end">
          <Link activeClassName="active" href={link.to}>
            <div className="inverted-border-radius text-left cursor-pointer">
              <a className="link pl-4 flex items-center">
                <FontAwesomeIcon className="text-gray-400" icon={link.Icon} />
                <p className="pl-2 text-white">{link.label}</p>
              </a>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    <div className="relative overflow-hidden bg-secondary-main m-auto mt-10 rounded-3xl p-6 w-11/12	">
      <div className="mb-32">
        <p className="font-medium text-lg text-white mb-1">Support 24/7</p>
        <p className="text-sm text-gray-400 mb-3">Contacts us anytime</p>
        <button className="btn bg-primary-main text-white">Start</button>
      </div>
      <img className="absolute bottom-2 right-0  z-10" src="/user.svg" style={{ width: 170, height: 170 }} />
      <div
        className="bg-secondary-light absolute z-0 rounded-full p-5"
        style={{ width: 270, height: 270, bottom: -100, right: -100 }}
      />
    </div>
  </Fragment>
);
export default Sidebar;
