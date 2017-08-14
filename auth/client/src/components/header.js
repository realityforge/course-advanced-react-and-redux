import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
  static renderSignOut() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    );
  }

  static renderSignUp() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
    );
  }

  static renderSignIn() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth App</Link>
        <ul className="nav navbar-nav">
          {this.props.authenticated && Header.renderSignOut()}
          {!this.props.authenticated && Header.renderSignIn()}
          {!this.props.authenticated && Header.renderSignUp()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
