import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(UserList.renderUser)}
      </div>
    );
  }

  static renderUser(user) {
    return (
      <div key={user.id} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary">{user.website}</a>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);
