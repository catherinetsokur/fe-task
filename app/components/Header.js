// @flow
import React from 'react';
import { Header as SemanticHeader, Icon } from 'semantic-ui-react';

const Header = () => (
  <SemanticHeader as="h2" icon>
    <Icon name="settings" />
    Usabilla Dashboard
    <SemanticHeader.Subheader>
      Manage application website feedback.
    </SemanticHeader.Subheader>
  </SemanticHeader>
);

export default Header;
