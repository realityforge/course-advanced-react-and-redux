import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSecret} from '../actions/index';

class Feature extends Component {
  componentDidMount() {
    this.props.getSecret();
  }

  render() {
    return (
      <div>Welcome to the fancy feature. Secret: {this.props.secret}</div>
    );
  }
}

function mapStateToProps({ secret }) {
  return { secret };
}

export default connect(mapStateToProps, { getSecret })(Feature);
