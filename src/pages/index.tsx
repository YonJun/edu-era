import Container from 'layouts/Container';
import Seo from 'components/Seo';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => (
  <Fragment>
    <Container>
      <Fragment>
        <Seo title="Home" />
        <div className="bg-green-500">
          <div className="grid grid-cols-12">
            <div className="bg-gray-100 p-4 font-semibold rounded-lg col-span-8 grid grid-cols-12">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input className=" bg-gray-100 col-span-11 focus:outline-none" placeholder="Search..." />
            </div>
            <div className="bg-red-600 col-span-4">icons</div>
          </div>
        </div>
      </Fragment>
    </Container>
  </Fragment>
);

export default MainPage;
