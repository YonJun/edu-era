import Container from 'layouts/Container';
import Seo from 'components/Seo';
import { Fragment } from 'react';

const E404 = () => (
  <Fragment>
    <Container>
      <Fragment>
        <Seo title="404" />
        404
      </Fragment>
    </Container>
  </Fragment>
);

export default E404;
