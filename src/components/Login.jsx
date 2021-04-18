import React, { useState } from "react";

export default function Login() {
    const [form, setState] = useState({ name: "", email: "" });
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form.name, form.email);
    };
    const handleChange = (e) => {
      setState({ ...form, [e.target.name]: e.target.value });
    };
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Mary"
            value={form.name}
            onChange={handleChange}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="mary.poppins@disney.fr"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
