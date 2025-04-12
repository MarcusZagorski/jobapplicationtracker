import "../styles/Login.css";
import PageLoad from "../components/PageLoad/PageLoad";
import { useState } from "react";

const Login = ({ loginSuccess, setLoginSuccess }) => {
  const [isLoading, setIsLoading] = useState(true);
  setInterval(() => setIsLoading(false), 3000);

  const userLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    form.reset();

    if (!response.ok) {
      console.log({ message: "Unsuccessful login!" });
      setLoginSuccess(false);
    } else {
      console.log({ message: "Successful login!" });
      setLoginSuccess(true);
    }
  };

  return isLoading ? (
    <PageLoad />
  ) : (
    <div className="login__container">
      <div className="login__content">
        <h1>JOB APPLICATION TRACKER</h1>
        <h2>Login</h2>

        <form onSubmit={userLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" name="email" placeholder="Enter your email..."></input>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" name="password" placeholder="Enter your password..."></input>
          </div>

          <div className="login__success">
            {loginSuccess === true && <p className="success">Success</p>}
            {loginSuccess === false && <p className="unsuccessful">Unsuccessful</p>}
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
