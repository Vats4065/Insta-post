import React, { useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const loginUser = localStorage.getItem("login");

  useMemo(() => {
    if (loginUser) {
      return navigate("/");
    } else {
      return navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("signup");
    window.location.reload();
  };

  return (
    <>
      <section className="navbar-fixed-top nav">
        <div className="container ">
          <nav className="d-flex justify-content-around py-1 fs-3 fw-bold hover ">
            {loginUser ? (
              <>
                <NavLink exact className="text-decoration-none " to="/">
                  Home
                </NavLink>

                <NavLink exact className="text-decoration-none " to="/mypost">
                  My Post
                </NavLink>

                <NavLink
                  exact
                  className="text-decoration-none "
                  to="/logout"
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                {" "}
                <NavLink exact className="text-decoration-none " to="/login">
                  Login
                </NavLink>
                <NavLink exact className="text-decoration-none " to="/signup">
                  Register
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </section>
    </>
  );
}

export default Navbar;
