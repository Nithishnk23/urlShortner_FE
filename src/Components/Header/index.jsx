
import { Link } from "react-router-dom";
import "./header.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  // Function to handle logout
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear the authentication token
    localStorage.removeItem("tokenAuth");
    localStorage.removeItem("loggedUser");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-4 px-lg-5">
        <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5 ">
          <li className="nav-item ">
            <Link
              style={{ textDecoration: "none" }}
              className="text-white mx-4 fs-3"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              style={{ textDecoration: "none" }}
              className="text-white  fs-3"
              to="/dashboard-url"
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="text-white mx-4 fs-3" to="/login">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav-item"></li>
          <li className="nav-item">
            <Link
              to="/login"
              className="fs-3 text-white"
              onClick={handleLogout}
            >
              <i className="fa-solid fa-power-off "></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
