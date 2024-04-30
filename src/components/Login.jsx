import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const data = { email, password };
  const loginUser = localStorage.getItem("login");

  useEffect(() => {
    if (loginUser) {
      return navigate("/");
    } else {
      return navigate("/login");
    }
  }, [loginUser]);

  const handlelogin = () => {
    axios
      .post("http://localhost:8080/login", data)
      .then((res) => {
        if (res.data.message === "match") {
          alert("you are loggedin successfully");
          localStorage.setItem(
            "login",
            JSON.stringify({ data, user: res.data.data })
          );
          navigate("/");
        } else {
          alert("enter correct details");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="login-card w-50 m-auto mt-5">
        <h2>Login Form</h2>

        <form className="form">
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

        <button type="submit" className="login_btn" onClick={handlelogin}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
