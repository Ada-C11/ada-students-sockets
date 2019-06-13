import React from 'react';
import PropTypes from 'prop-types';

import './Student.css';



const Student = (props) => {
  const onPresentButtonClick = () => {
    console.log(props)
    props.markPresentCallback(props.index);
  }
  
  let classroomClass = 'student-socket';
  if (props.classRoom === 'port') {
    classroomClass = 'student-port'
  }

  let attendanceClass = (props.isPresent) ? 'present' : 'absent';

  return (
    <section className={classroomClass}>
      <h3>Student Component</h3>
      <h4 className={attendanceClass}>Name {props.fullName} </h4>
      <p>Email: {props.email} </p>
      <button 
        disabled={ props.isPresent }
        onClick={ onPresentButtonClick }>Mark Present</button>
    </section>
  );
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