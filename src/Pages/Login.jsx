import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Form.css";

function Login() {
  const navi = useNavigate()
  const [err, setErr] = useState({});
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [checkdata, setCheckdata] = useState({});

  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErr = {};

    if (!formdata.name.trim()) newErr.name = "Name field is required";
    if (!formdata.password.trim()) newErr.password = "Password field is required";

    // Check login credentials
    if (
      formdata.name.trim() !== checkdata.name ||
      formdata.password.trim() !== checkdata.password
    ) {
      newErr.valid = "Invalid credentials or please register first";
    }

    setErr(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful ✅");
      setFormdata({
        name: "",
        email: "",
        password: "",
      });
      navi("/Home")
    }
  };

  useEffect(() => {
    const savedata = localStorage.getItem("register");
    if (savedata) {
      setCheckdata(JSON.parse(savedata));
    }
  }, []);

  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <form onSubmit={handleSubmit} className="row ">
        {err.valid && <p className="text-danger">{err.valid}</p>}

        <div className="col-md-8 col-11">
          <div className="row">
            <div className="col-12 custominput">
              <label htmlFor="inputName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                onChange={handleFormdata}
                value={formdata.name}
              />
              {err.name && <small className="text-danger">{err.name}</small>}
            </div>

            <div className="col-12 custominput mt-3">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                onChange={handleFormdata}
                value={formdata.password}
              />
              {err.password && <small className="text-danger">{err.password}</small>}
            </div>

            <div className="col-12 mt-3">
              <button type="submit" className="custom-button3">Login</button>
            </div>
          </div>
        </div>

        <div className="col-md-3   custominput2 ">
          <div className="card" style={{ width: "300px" }}>
            <div className="card-body">
              <h5 className="card-title">Register First?</h5>
              <p className="card-text">If you don't have an account, please register.</p>
              <button onClick={()=>navi("/reg")} className="custom-button2">Go to Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
