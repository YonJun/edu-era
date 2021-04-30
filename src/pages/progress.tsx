import Container from 'layouts/Container';
import Seo from 'components/Seo';
import { Fragment } from 'react';

const ProgressPage = () => (
  <Fragment>
    <Container>
      <Fragment>
        <Seo title="Progress" />
        <div className="flex items-center justify-center w-full h-full ">
          <h1 className="text-4xl">Progress page!</h1>
        </div>
      </Fragment>
    </Container>
  </Fragment>
);

export default ProgressPage;
