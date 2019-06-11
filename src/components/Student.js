import React from 'react'

const Student = (props) => {
  const name = props.fullName || "Anon";

  console.log(props);
  return (
    <section>
      <h3>Student Component</h3>
      <h4>Name {name} </h4>
      <p>Email: {props.email} </p>
    </section>
  );
}

export default Student;