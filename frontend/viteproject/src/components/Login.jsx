// import { useState } from "react";
// import axios from "axios";
// import "./admin.css";

// export default function AdminLogin() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3004/api/admin", form);
//       if (res.data.success) {
       
//         setMessage("Login successful. Redirecting...");
       
//         // window.location.href = "/admin/dashboard";
//       } else {
//         setMessage("Invalid email or password.");
//       }
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login Admin</h2>

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
