// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { Search as SearchInput } from 'semantic-ui-react';

class Search extends Component<{}, *> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      value: '',
    };
  }
  resetComponent = () => this.setState({
    isLoading: false,
    results: [],
    value: '',
  })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) {
        this.resetComponent();
        return;
      }

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter([], isMatch),
      });
    }, 500);
  }
  render() {
    const { isLoading, value, results } = this.state;
    return (
      <SearchInput
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}

export default Search;
