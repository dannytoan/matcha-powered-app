import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginForm.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
      history.push("/products/all")
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/products/all" />;
  }

  return (
    <div id="login-main-container" className="page-width">
      <div id="login-form-container">
        <form id="login-form" onSubmit={onLogin}>
        <h1 id="login-form-header-title">Log Into My MatchaShark</h1>

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
            <div id="new-user-signup-msg">

            <p className="text">New to MatchaShark?</p> <a className="text" id="create-acc-link" href="/sign-up">Create An Account</a>
            </div>
        </form>
        <div>
          {errors.length > 0 ? (
              <div id="edit-review-errors-container">
                <div className="login-errors-div">
                  <ul className="signup-errors-ul">
                    {errors.map((error, idx) => (
                      <li className="create-product-errors-li" key={idx}>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
      </div>
    </div>
  );
};

export default LoginForm;
