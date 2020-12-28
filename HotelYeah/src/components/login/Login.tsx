import React, { useState } from "react";

function Login () {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    password2: ""
  })
  
  const { firstName, lastName, password, password2 } = formData;

  const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (password !==password2) {
      console.log("oof");
    } else {
      console.log("API Call goes here");
    }
  }

  return (
    <div>
      <h1>Bare-Bones Login Component</h1>
      {/* Redux Example */}
      <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" value="Login" className="btn btn-primary" />
        </form>

    </div>
  );
};

export default (Login);
