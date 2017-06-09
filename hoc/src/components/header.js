import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { authenticate } from '../actions/index';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }

  authButton() {
    return (
      <button onClick={() => this.props.authenticate( !this.props.authenticated )}>
        {this.props.authenticated ? 'Sign Out' : 'Sign In'}
      </button>
    );
  }
}

function mapStateToProps( { authenticated } ) {
  return { authenticated };
}

export default connect( mapStateToProps, { authenticate } )( Header );
