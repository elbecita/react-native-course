import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {

  render() {
    return (
    );
  }
}

const mapSateToProps = state => {
  return { libraries: state.libraries }
};

export default connect(mapSateToProps)(LibraryList);
