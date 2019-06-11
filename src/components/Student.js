import React from 'react';
import PropTypes from 'prop-types';

import './Student.css';

const Student = (props) => {
  const name = props.fullName || "Anon";

  const coolBox = {
    border: "1em solid red",
  }

  console.log(props);
  let classToUse = 'student-socket';
  if (props.classRoom === 'port') {
    classToUse = 'student-port'
  }
  return (
    <section className={classToUse}>
      <h3>Student Component</h3>
      <h4>Name {name} </h4>
      <p>Email: {props.email} </p>
    </section>
  );
}

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  classRoom: PropTypes.string
}

export default Student;