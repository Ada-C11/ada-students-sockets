import React, {Component} from 'react';
import Student from './Student';
import './StudentCollection.css'
import NewStudentForm from './NewStudentForm';

class StudentCollection extends Component {
  constructor(props){
    super(props);
    this.state = {
      students: [
        {
          fullName: 'Devin Helmgren',
          email: 'devin@dontemailme.org',
          classRoom: 'socket',
          isPresent: false
        },
        {
          fullName: 'Dee',
          email: 'dee@dee.com',
          classRoom: 'port',
          isPresent: false
        },
        {
          fullName: 'Ada Lovelace',
          email: 'ada@adadev.org',
          isPresent: false
        }
      ]
    }
  }

  markPresent = (studentIndex) => {
    console.log(studentIndex);
    let newState = this.state;

    newState.students[studentIndex].isPresent = true;

    this.setState(newState)
  }

  addStudent = (student) => {
    const newState = this.state;
    newState.students.push(student);

    this.setState(newState);
  }

  render() {
    const studentComponents = this.state.students.map((student, index) => {
      const { fullName, email, classRoom, isPresent } = student;
      return (<li key={index}><Student
        key={index}
        fullName={fullName}
        email={email}
        index={index}
        classRoom={classRoom}
        isPresent={isPresent}
        markPresentCallback={this.markPresent}
      />
      </li>);
    });
  
    return (
      <div className="student-collection">Students
        {studentComponents}
        <NewStudentForm addStudentCallback={this.addStudent}/>
      </div>
  
    );
  }
}

export default StudentCollection;