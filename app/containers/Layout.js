import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        This is header
      </header>
      <div>
        {children}
      </div>
      <footer>
        This is footer
      </footer>
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
