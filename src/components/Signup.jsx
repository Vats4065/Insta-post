import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";




function Signup() {
  const [username, setUserName] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);
  
  const navigate = useNavigate();
  const data = { username, email, password };

  const collectData = () => {
    axios
      .post("http://localhost:8080/signup", data)
      .then((res) => {
        if (res.data.message === "user logedin") {
          alert(res.data.message);
          localStorage.setItem("signup", JSON.stringify(data));
          navigate("/login")
        } else {
          alert(res.data.message);
          console.log(res.data.message);
        }
      })
      .catch((err) => console.log(err));


    console.log(username, email, password);
    empty();
  };

  const empty = () => {
    setEmail("");
    setUserName("");
    setPassword("");
  };

  return (
    <>
      <div className="login-card w-50 m-auto mt-5">
        <h2>Signup Form</h2>

        <form className="form">
          <input
            type="text"
            placeholder="Username"
            className="email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </form>

        <br />

        <div className="text-center">
          <Link to="/login" className="fp text-center">
            Already have Acoount?Login
          </Link>
        </div>

        <button type="submit" className="login_btn" onClick={collectData}>
          SignUp
        </button>
      </div>
    </>
  );
}

export default Signup;
