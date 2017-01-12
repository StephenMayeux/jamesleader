// example of object destructuring
import React, { Component } from 'react';
import axios from 'axios';

// Functional component
import CamperListItem from './CamperListItem';

// Inherits propers from Component
class CamperList extends Component {
  // initializing state and component set up
  constructor(props) {
    super(props);
    this.state = {
      allTime: [],
      recent: []
    };
  }

  // returns an array of react components
  // add a key
  // { ...camper } is shorthand for passing
  // all obj properties as props to child components
  renderList() {
    const { allTime } = this.state;
    return allTime.map(camper => {
      return <CamperListItem { ...camper } />;
    });
  }

  // Renders once before initial render.
  // Great place for network requests!
  componentWillMount() {
    axios.get('http://url.com/api/endpoint')
     .then(response => {
       this.setState({ allTime: response.data.campers });
     });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

// do not forget to export!
export default CamperList;
