import React from 'react';
import Student from './Student';


const generateStudentComponents = (students) => {
  return students.map((student) => {
    const { fullName, email } = student;
    return (<Student
      key={fullName}
      fullName={fullName}
      email={email}
    />);
  });
};

const StudentCollection = (props) => {
  console.log(props);
  const { students, num } = props;
  console.log(num);

  const studentComponents = generateStudentComponents(students);

  return (
    <div>Students
      {studentComponents}
    </div>

  );
}

export default StudentCollection;