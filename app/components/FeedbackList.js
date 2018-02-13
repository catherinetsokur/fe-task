// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Flag } from 'semantic-ui-react';
import UAParser from 'ua-parser-js';

import type { Item } from '../types';

const parser = new UAParser();

type Props = {
  items: Item;
};

const FeedbackList = ({ items }: Props) => {
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Country</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell>Comment</Table.HeaderCell>
          <Table.HeaderCell>Browser</Table.HeaderCell>
          <Table.HeaderCell>Device</Table.HeaderCell>
          <Table.HeaderCell>Platform</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => {
          parser.setUA(item.browser.userAgent);
          const agent = parser.getResult();
          return (
            <Table.Row key={Math.random()}>
              <Table.Cell>
                { item.geo &&
                  item.geo.country &&
                  <Flag name={item.geo.country.toLowerCase()} />
                }
              </Table.Cell>
              <Table.Cell>
                {item.rating}
              </Table.Cell>
              <Table.Cell>
                {item.comment}
              </Table.Cell>
              <Table.Cell>
                {agent.browser.name} {agent.browser.version}
              </Table.Cell>
              <Table.Cell>
                {agent.device.model}
              </Table.Cell>
              <Table.Cell>
                {agent.os.name} {agent.os.version}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

FeedbackList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeedbackList;
