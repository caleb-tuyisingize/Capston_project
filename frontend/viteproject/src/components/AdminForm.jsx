import { useState } from "react";
import axios from "axios";
import "./admin.css";

export default function AdminForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
    is_active: true,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3004/api/Admin", form);
      setMessage(res.data.message);
      setForm({ name: "", email: "", password: "", role: "admin", is_active: true });
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Student</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />

      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />

      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="student">Student</option>
      </select>

      <label>
        <input type="checkbox" name="is_active" checked={form.is_active} onChange={handleChange} />
        Active
      </label>

      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}
