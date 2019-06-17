import React, { Component } from 'react';
import  './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();
    this.state = {
        fullName: null,
        email: null
    };
  }

  onNameChange = (event) => {
    console.log(`Name Field updated ${event.target.value}`);
    this.setState({
      fullName: event.target.value,
    });  
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });  
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
        fullName: this.state.fullName,
        email: this.state.email
    }

    if (this.hasValidName() && this.hasValidEmail()) {
      this.props.addStudentCallback(newStudent);
    }
  }

  hasValidName = () => {
    return this.state.fullName !== "";
  }

  hasValidEmail = () => {
    // We need to validate that the email isn't null before we can .match
    return this.state.email && this.state.email.match(/.+@.+[.].+/);
  }

  nameRequired = () => {
    if (this.hasValidName()) {
      return <div></div>;
    } else {
      return <div>Error: Name is required</div>;
    }
  }

  emailRequired = () => {
    if (this.hasValidEmail()) {
      return <div></div>;
    } else {
      return <div>Error: Invalid email</div>;
    }
  }

  render() {

    return (
      <form 
        className="new-student-form"
        onSubmit = {this.onFormSubmit}>
        <div>
          {this.nameRequired()}
          <label htmlFor="fullName">Name:</label>
          <input name="fullName" value={this.state.fullName} onChange={this.onNameChange}/>
        </div>
        <div>
          {this.emailRequired()}
          <label htmlFor="email">Email:</label>
          <input name="email" value={this.state.email} onChange={this.onEmailChange}/>
        </div>
        <input
          type="submit"
          value="Add Student"
        />
      </form>
    );
  }
}

export default NewStudentForm;