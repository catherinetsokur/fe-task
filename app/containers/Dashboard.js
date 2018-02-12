import React, { Component } from 'react';
import Layout from './Layout';
import img from '../assets/images/react_logo_512x512.png';
import Feedback from '../components/Feedback';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

  render() {
    const { data } = this.state;
    console.log('data', data);
    return (
      <Layout>
        <div>
          <h2 id="heading">Hello ReactJS</h2>
          <img
            className="image"
            style={{ margin: '0.5em' }}
            height="40"
            width="40"
            src={img}
            alt="React Logo"
          />
          <Feedback data={data} />
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
