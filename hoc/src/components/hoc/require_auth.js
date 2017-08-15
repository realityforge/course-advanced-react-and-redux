import React, {Component} from 'react';
import {connect} from 'react-redux';

// ComposedComponent is the name used by convention for the component
// that will be enhanced
export default function ( ComposedComponent ) {
  class Authentication extends Component {

    //React requires that you declare the need for context before it will be put into object
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillUpdate( nextProps ) {
      //This catches the scenario where the user logs out while rendering this component
      this.redirectToRootIfUnauthenticated( nextProps );
    }

    componentWillMount() {
      this.redirectToRootIfUnauthenticated( this.props );
    }

    redirectToRootIfUnauthenticated( props ) {
      if ( !props.authenticated ) {
        this.context.router.push( '/' );
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    }
  }

  function mapStateToProps( { authenticated } ) {
    return { authenticated };
  }

  return connect( mapStateToProps )( Authentication );
}
