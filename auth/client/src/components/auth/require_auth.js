import React, {Component} from 'react';
import {connect} from 'react-redux';

// ComposedComponent is the name used by convention for the component
// that will be enhanced
export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillUpdate(nextProps) {
      //This catches the scenario where the user logs out while rendering this component
      this.redirectToRootIfUnauthenticated(nextProps);
    }

    componentWillMount() {
      this.redirectToRootIfUnauthenticated(this.props);
    }

    redirectToRootIfUnauthenticated(props) {
      if (!props.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
