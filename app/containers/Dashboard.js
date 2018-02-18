// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { Pagination, Menu, Dropdown } from 'semantic-ui-react';
import Layout from './Layout';
import FeedbackList from '../components/FeedbackList';
import Search from '../components/Search';

import { getColor } from '../utils';

import type { Item } from '../types';

type DashboardProps = {}
type DashboardState = {
  data: { items: Item },
  activePage: number,
};

class Dashboard extends Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      data: { items: [] },
      activePage: 1,
    };
  }
  componentWillMount() {
    // this should not be hardcoded
    // it should be separated depending on which state library we are using, redux, flux, mobex...
    fetch('https://static.usabilla.com/recruitment/apidemo.json').then((res) => {
      res.json().then((json) => {
        if (!res.ok) {
          return Promise.reject(json);
        }

        this.setState({
          data: json,
        });
        return json;
      });
    });
  }

  handleOnPageChange = (event: SyntheticEvent<*>, data: Object): void => {
    const { activePage } = data;
    this.setState({
      activePage,
    });
  }

  // handleRatingFilterChange = (event: SyntheticEvent<*>): void => {
  //   // TODO: handle filtering logic here
  // }

  render() {
    const { data, activePage } = this.state;
    const ITEMS_PER_PAGE = 10;
    let totalPages = 0;
    let ratings = [];
    // If the data was coming from API i would use {data.total} instead using {item.length}
    if (data.items) {
      totalPages = Math.round(data.items.length / ITEMS_PER_PAGE);
      ratings = _.uniq(data.items.map(item => item.rating).sort());
    }
    const offset = (activePage - 1) * ITEMS_PER_PAGE;
    const limit = offset + ITEMS_PER_PAGE;

    return (
      <Layout>
        <div>
          <Menu>
            <Menu.Menu position="left">
              <Menu.Item>
                <Search />
              </Menu.Item>
              <Menu.Item>
                <Pagination
                  defaultActivePage={1}
                  totalPages={totalPages}
                  firstItem={null}
                  lastItem={null}
                  pointing
                  secondary
                  onPageChange={this.handleOnPageChange}
                />
              </Menu.Item>
              <Menu.Item>
                <Dropdown text="Ratings" openOnFocus selection className="icon" onChange={this.handleRatingFilterChange}>
                  <Dropdown.Menu>
                    <Dropdown.Divider />
                    { ratings.map(item => (
                      <Dropdown.Item
                        key={Math.random()}
                        label={{ color: getColor(item), empty: true, circular: true }}
                        text={item}
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <FeedbackList items={data.items.slice(offset, limit)} />
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
