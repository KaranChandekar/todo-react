import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h2>Todo App</h2>
      </div>
      <article>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </article>
    </header>
  );
};

export default Header;
