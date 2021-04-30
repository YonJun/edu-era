import Container from 'layouts/Container';
import Seo from 'components/Seo';
import { Fragment } from 'react';

const E404 = () => (
  <Fragment>
    <Container>
      <Fragment>
        <Seo title="404" />
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <h1 className="text-4xl">404</h1>
          <h1 className="text-2xl">Page not found!</h1>
        </div>
      </Fragment>
    </Container>
  </Fragment>
);

export default E404;
