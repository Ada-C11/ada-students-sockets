import React from 'react';
import PropTypes from 'prop-types';

import './Student.css';

class Student extends React.Component{
  onPresentButtonClick = () => {
    console.log(this)
    this.props.markPresentCallback(this.props.index);
  }

  render (){
    let classroomClass = 'student-socket';
    if (this.props.classRoom === 'port') {
      classroomClass = 'student-port'
    }

    let attendanceClass = (this.props.isPresent) ? 'present' : 'absent';

    return (
      <section className={classroomClass}>
        <h3>Student Component</h3>
        <h4 className={attendanceClass}>Name {this.props.fullName} </h4>
        <p>Email: {this.props.email} </p>
        <button 
          disabled={ this.props.isPresent }
          onClick={ this.onPresentButtonClick }>Mark Present</button>
      </section>
    );
  }
}

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  classRoom: PropTypes.string,
  isPresent: PropTypes.bool
}

Student.defaultProps = {
  fullName: 'Anon',
  email: 'no email on file',
}

export default Student;