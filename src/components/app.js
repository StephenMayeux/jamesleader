import React, { Component } from 'react';

// Import List Component
// Relative path if not npm package
// File extension optional if *.js or *.jsx
import CamperList from './CamperList';

export default class App extends Component {
  render() {
    return (
      <CamperList />
    );
  }
}
