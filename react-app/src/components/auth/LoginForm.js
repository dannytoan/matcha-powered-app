import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginForm.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div id="login-main-container" className="page-width">
      <div id="login-form-container">
        <form id="login-form" onSubmit={onLogin}>
        <h1 id="login-form-header-title">Log Into My MatchaShark</h1>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
            <label htmlFor="email" className="login-labels">EMAIL ADDRESS:</label>
          <div>
            <input
              name="email"
              type="text"
              // placeholder="Email"
              className="login-input-field"
              value={email}
              onChange={updateEmail}
            />
          </div>
            <label htmlFor="password" className="login-labels">PASSWORD:</label>
          <div>
            <input
              name="password"
              type="password"
              // placeholder="Password"
              className="login-input-field"
              value={password}
              onChange={updatePassword}
            />
          </div>
            <button className="auth-form-buttons" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
