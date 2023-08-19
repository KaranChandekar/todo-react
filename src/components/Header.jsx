import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  return (
    <header className="header">
      <div>
        <h2>Todo App</h2>
      </div>
      <article>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {isAuthenticated ? (
          <button className="btn">Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </article>
    </header>
  );
};

export default Header;
