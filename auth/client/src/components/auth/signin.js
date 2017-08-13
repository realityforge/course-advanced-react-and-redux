import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {signinUser} from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" {...email}/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" {...password}/>
        </fieldset>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'Signin', fields: ['email', 'password'] })(
  connect(null, { signinUser })(Signin));
