import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Student.css';

class Student extends Component{
  

  render(){
    console.log(this.props);
    let classToUse = 'student-socket';
    if (this.props.classRoom === 'port') {
      classToUse = 'student-port'
    }
    return (
      <section className={classToUse}>
        <h3>Student Component</h3>
        <h4>Name {this.props.fullName} </h4>
        <p>Email: {this.props.email} </p>
      </section>
    );
  }
} 


Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  classRoom: PropTypes.string
}

Student.defaultProps = {
  fullName: 'Anon',
  email: 'no email on file',
}

export default Student;