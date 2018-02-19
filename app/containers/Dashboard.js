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
  data: { items: Item[] },
  activePage: number,
  activeRating: number | null,
  items: Item[]
};

type DropDownItem = {
  label: string,
  value: any,
  text: string,
  onClick? : () => void
}

class Dashboard extends Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      data: { items: [] },
      activePage: 1,
      activeRating: null,
      items: [],
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
          items: json.items,
        });
        return json;
      });
    });
  }

  handleOnPageChange = (event: SyntheticEvent<*>, data:{ activePage: number }): void => {
    const { activePage } = data;
    this.setState({
      activePage,
    });
  }

  handleRatingFilterChange = (event: SyntheticEvent<*>, data: DropDownItem): void => {
    // TODO: handle filtering logic here
    this.setState({
      activeRating: data.value,
      activePage: 1,
    });
  }

  handleSearchChange = (value: string): void => {
    const { data } = this.state;

    if (value) {
      const re = new RegExp(_.escapeRegExp(value), 'i');
      const isMatch = result => re.test(result.comment);

      this.setState({
        items: _.filter(data.items, isMatch),
        activePage: 1,
      });
    } else {
      this.setState({
        items: data.items,
        activePage: 1,
      });
    }
  }

  render() {
    const { activePage, activeRating, items: filteredItems } = this.state;
    const ITEMS_PER_PAGE = 10;
    let totalPages = 0;
    let ratings = [];
    let items = [];

    // If the data was coming from API i would use {data.total} instead using {item.length}
    if (filteredItems) {
      ratings = _.uniq(filteredItems.map(item => item.rating).sort());
      items = _.filter(filteredItems, item => !activeRating || item.rating === activeRating);
      totalPages = Math.round(items.length / ITEMS_PER_PAGE);
    }
    const offset = (activePage - 1) * ITEMS_PER_PAGE;
    const limit = offset + ITEMS_PER_PAGE;

    items = items.slice(offset, limit);

    return (
      <Layout>
        <div>
          <Menu>
            <Menu.Menu position="left">
              <Menu.Item>
                <Search onChange={this.handleSearchChange} />
              </Menu.Item>
              <Menu.Item>
                <Dropdown
                  multiple
                  pointing
                  text="Ratings"
                  className="icon"
                >
                  <Dropdown.Menu>
                    <Dropdown.Header icon="filter" content="by rating" />
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => this.setState({
                        activeRating: null,
                      })}
                    >
                      Show All
                    </Dropdown.Item>
                    { ratings.map(item => (
                      <Dropdown.Item
                        key={item}
                        label={{ color: getColor(item), empty: true, circular: true }}
                        text={`${item}`}
                        value={item}
                        onClick={this.handleRatingFilterChange}
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              {!!totalPages &&
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
              }
            </Menu.Menu>
          </Menu>
          <FeedbackList items={items} />
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
