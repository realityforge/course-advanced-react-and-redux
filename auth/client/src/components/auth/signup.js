import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {signupUser} from '../../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    this.props.signupUser(this.props.history, { email, password });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
        <Field name="email" label="Email" component={field => this.renderField(field, 'text')}/>
        <Field name="password" label="Password" component={field => this.renderField(field, 'password')}/>
        <Field name="confirmPassword"
               label="Confirm Password"
               component={field => this.renderField(field, 'password')}/>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }

  renderField(field, type) {
    const { meta: { touched, error } } = field;
    // Rather than using field.meta.touched we can use touched
    // Rather than using field.meta.error we can use error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <fieldset className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={type}
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </fieldset>
    );
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function validate(form) {
  const errors = {};

  console.log(form);

  if (!form.email) {
    errors.email = 'Please enter an email';
  }

  if (!form.password) {
    errors.password = 'Please enter a password';
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Please enter a password confirmation';
  }

  if (form.password !== form.confirmPassword) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

export default reduxForm(
  {
    form: 'Signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
  }
)(connect(mapStateToProps, { signupUser })(Signup));
