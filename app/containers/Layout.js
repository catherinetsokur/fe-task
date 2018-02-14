import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Container text>
        <Header />
      </Container>
      <Container>
        {children}
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.shape({}),
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
