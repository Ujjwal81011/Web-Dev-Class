import React, { useState } from 'react';
import Student from './Student';

const Body = () => {
    const [studentInfo, setStudentInfo] = useState([
        { id: 1, name: "Ujjwal", marks: 73 },
        { id: 2, name: "Tarun", marks: 69 },
        { id: 3, name: "Vishal", marks: 68 },
        { id: 4, name: "Shyam", marks: 100 }
    ]);

    return (
        <div>
            <h2>Student Information</h2>
            {studentInfo.map((student) => (
                <Student
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    marks={student.marks}
                />
            ))}
        </div>
    );
};

export default Body;