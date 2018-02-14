// @flow
import React from 'react';
import { Header as SemanticHeader, Segment } from 'semantic-ui-react';

const Header = () => (
  <Segment textAlign="center" size="big" vertical>
    <SemanticHeader as="h2">
      Feedback Dashboard
      <SemanticHeader.Subheader>
        Manage application website feedback.
      </SemanticHeader.Subheader>
    </SemanticHeader>
  </Segment>
);

export default Header;
