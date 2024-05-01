import React, { useState, useEffect } from "react";

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/students");
        const data = await response.json();
        setStudents(data.message);
       
      } catch (error) {
        console.error("Error al obtener la lista de estudiantes:", error);
       
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Lista de Estudiantes</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>Nombre:</strong> {student.name} <br />
            <strong>Email:</strong> {student.email} <br />
            <strong>Teléfono:</strong> {student.phone} <br />
            <strong>Lenguaje:</strong> {student.lenguge}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
