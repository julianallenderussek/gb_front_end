import React from 'react'
import { useParams } from 'react-router-dom';

const Student = () => {
  
  const { studentname, studentno } = useParams();

  return (
    <div>
      <p>Student</p>
      <div>
        {`The student name is ${studentname}!`}
        { studentno ? `The student number is: ${studentno}` : "" }
      </div>
    </div>
  )
}

export default Student