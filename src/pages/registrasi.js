import Cookies from "js-cookie";
import { useState } from "react";

export default function Registrasi() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    
  };
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="username"> Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Your Name"
          onChange={handleFormChange}
        />
        <br />
        <label htmlFor="Email"> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          onChange={handleFormChange}
        />
        <br />
        <label htmlFor="password"> Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleFormChange}
        />
        <br />
        <label htmlFor="password"> Konfirmasi Password</label>
        <input
          type="password"
          id="konPass"
          name="konPass"
          onChange={handleFormChange}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
