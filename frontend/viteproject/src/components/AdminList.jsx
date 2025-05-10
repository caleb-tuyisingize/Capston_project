import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/api/admin")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Registered Students</h2>
      <nav>
        {students.map((item, index) => (
          <ul key={index}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.role}</li>
          </ul>
        ))}
      </nav>
    </div>
  );
}
