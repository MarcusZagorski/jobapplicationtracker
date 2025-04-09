import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__content">
        <h1>JOB APPLICATION TRACKER</h1>
        <h2>Login</h2>

        <form>
          <div>
            <label for="email">Email</label>
            <br />
            <input type="email" id="email" name="email" placeholder="Enter your email..."></input>
          </div>

          <div>
            <label for="password">Password</label>
            <br />
            <input type="password" id="password" name="password" placeholder="Enter your password..."></input>
          </div>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
