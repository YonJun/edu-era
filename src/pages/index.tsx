import Container from 'layouts/Container';
import Seo from 'components/Seo';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';

const MainPage = () => (
  <Fragment>
    <Container>
      <Fragment>
        <Seo title="Home" />
        <div className="">
          {
            //Header
          }
          <div className="grid grid-cols-12">
            <div className="col-span-9 bg-gray-100 p-4 font-semibold rounded-lg grid grid-cols-12">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input className=" bg-gray-100 col-span-11 focus:outline-none" placeholder="Search..." />
            </div>
            <div className="col-span-3 flex items-center justify-end gap-5">
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="p-4 bg-primary-main rounded-lg text-center text-white">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
          </div>
          {
            //Body
          }
          <div className="bg-green-500 mt-10">
            <h3 className="font-semibold text-2xl">Your unfinished courses</h3>
            <div className="mt-5 grid grid-flow-col grid-cols-2 gap-4">
              <div className="bg-red-400">1</div>
              <div className="bg-red-400">2</div>
            </div>
          </div>
        </div>
      </Fragment>
    </Container>
  </Fragment>
);

export default MainPage;
