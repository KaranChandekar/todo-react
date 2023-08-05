import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Placeholder" />
          <button type="submit">Log In</button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
