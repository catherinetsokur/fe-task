// @flow
import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react';
import Layout from './Layout';
import FeedbackList from '../components/FeedbackList';
import Search from '../components/Search';

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
    }).catch(error => console.error('Error:', error));
  }

  handleOnPageChange = (event: SyntheticEvent<*>, data: Object) => {
    const { activePage } = data;
    this.setState({
      activePage,
    });
  }

  render() {
    const { data, activePage } = this.state;
    const ITEMS_PER_PAGE = 10;
    let totalPages = 0;
    // If the data was coming from API i would use {data.total} instead using {item.length}
    if (data.items) {
      totalPages = Math.round(data.items.length / ITEMS_PER_PAGE);
    }
    const offset = (activePage - 1) * ITEMS_PER_PAGE;
    const limit = offset + ITEMS_PER_PAGE;

    return (
      <Layout>
        <div>
          <Search />
          <Pagination
            defaultActivePage={1}
            totalPages={totalPages}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            onPageChange={this.handleOnPageChange}
          />
          <FeedbackList items={data.items.slice(offset, limit)} />
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
