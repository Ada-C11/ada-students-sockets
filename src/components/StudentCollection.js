import React from 'react';
import Student from './Student';
import './StudentCollection.css'


const generateStudentComponents = (students) => {
  return students.map((student) => {
    const { fullName, email, classRoom } = student;
    return (<Student
      key={fullName}
      fullName={fullName}
      email={email}
      classRoom={classRoom}
    />);
  });
};

const StudentCollection = (props) => {
  console.log(props);
  const { students, num } = props;
  console.log(num);

  const studentComponents = generateStudentComponents(students);

  return (
    <div className="student-collection">Students
      {studentComponents}
    </div>

  );
}

export default StudentCollection;