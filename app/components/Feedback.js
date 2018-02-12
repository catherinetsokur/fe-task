import React from 'react';

import { Table, Header, Image } from 'semantic-ui-react';

const Feedback = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Employee</Table.HeaderCell>
          <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image
                rounded
                size="mini"
                src="/assets/images/wireframe/square-image.png"
              />
              <Header.Content>
              Lena
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
          22
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image
                rounded
                size="mini"
                src="/assets/images/wireframe/square-image.png"
              />
              <Header.Content>
              Matthew
                <Header.Subheader>Fabric Design</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
          15
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image
                rounded
                size="mini"
                src="/assets/images/wireframe/square-image.png"
              />
              <Header.Content>
              Lindsay
                <Header.Subheader>Entertainment</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
          12
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image
                rounded
                size="mini"
                src="/assets/images/wireframe/square-image.png"
              />
              <Header.Content>
              Mark
                <Header.Subheader>Executive</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
          11
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default Feedback;
