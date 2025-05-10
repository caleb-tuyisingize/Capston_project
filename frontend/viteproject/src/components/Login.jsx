// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// export default function LoginForm() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3004/api/admin", form);
//       setMessage(res.data.message);


//       navigate("/dashboard");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <input
//         name="email"
//         type="email"
//         value={form.email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       />

//       <input
//         name="password"
//         type="password"
//         value={form.password}
//         onChange={handleChange}
//         placeholder="Password"
//         required
//       />

//       <button type="submit">Login</button>
//       <p>{message}</p>
//     </form>
//   );
// }

import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
      });
    const [message, setMessage] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault()
           try {
      const res = await axios.post("http://localhost:3004/api/login-form", form);
      setMessage(res.data.message);
      setForm({
        email: "",
        password: "",
      });

    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
    }
    const handleChange = async(e)=>{
            const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    }
    
  return (
    <>
    <div>
      <h1>Welcome to login form</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <h2>Login Here</h2>

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />

      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />

      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
    </>
    
  )
}



