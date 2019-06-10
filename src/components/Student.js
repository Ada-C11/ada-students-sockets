import React from 'react'

const Student = (props) => {
  console.log(props);
  return (
    <section>
      <h3>Student Component</h3>
      <h4>Name {props.fullName} </h4>
      <p>Email: {props.email} </p>
    </section>
  );
}

export default Student;