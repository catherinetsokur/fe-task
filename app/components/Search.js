// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

type SearchProps = {
  onChange: (string) => void
}

type SearchState = {
  isLoading: boolean,
  value: string
}

class Search extends Component<SearchProps, SearchState> {
  static propTypes = {
    onChange: PropTypes.func,
  }
  static defaultProps = {
    onChange: () => {},
  }

  constructor(props: SearchProps) {
    super(props);
    this.state = {
      isLoading: false,
      value: '',
    };
  }
  resetComponent = () => this.setState({
    isLoading: false,
    value: '',
  })

  handleSearchChange = (e: SyntheticEvent<*>, data: { value: string }) => {
    this.setState({ isLoading: true, value: data.value });
    this.props.onChange(data.value);

    setTimeout(() => {
      if (this.state.value.length < 1) {
        this.resetComponent();
        return;
      }

      this.setState({
        isLoading: false,
      });
    }, 500);
  }
  render() {
    const { isLoading, value } = this.state;
    return (
      <Input
        iconPosition="left"
        loading={isLoading}
        placeholder="Search comments"
        onChange={this.handleSearchChange}
        value={value}
      />
    );
  }
}

export default Search;
