import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(firstName, lastName, username, email, password)
      );
      if (data) {
        setErrors(data);
      }
    }
  };

  useEffect(() => {
    const errors = [];

    if (!firstName.length) {
      errors.push("Please provide your first name");
    } else if (firstName.length > 50) {
      errors.push("First name must not exceed 50 characters");
    }

    if (!lastName.length) {
      errors.push("Please provide your last name");
    } else if (lastName.length > 50) {
      errors.push("Last name must not exceed 50 characters");
    }

    if (!username.length) {
      errors.push("Please provide a username");
    } else if (username.length < 5) {
      errors.push("Username must be at least 5 characters long");
    }

    if (repeatPassword !== password) {
      errors.push("Passwords must match");
    }

    if (!password.length) {
      errors.push("Please provide a password");
    } else if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    } else if (password.length >= 20) {
      errors.push("Password must be between 8 to 19 characters");
    }

    if (!email.length) {
      errors.push("Please provide an email address");
    } else if (!email.includes("@")) {
      errors.push("Please provide a valid email address");
    }

    setErrors(errors);
  }, [firstName, lastName, username, email, password, repeatPassword]);

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div id="login-main-container" className="page-width">
      <div id="signup-form-container">
        <form id="signup-form" onSubmit={onSignUp}>
          <h1 id="login-form-header-title">Create an Account</h1>
          <div>
            {errors.length > 0 ? (
              <div id="edit-review-errors-container">
                <div className="signup-errors-div">
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
          <div>
            <label className="login-labels">First Name</label>
            <input
              type="text"
              name="first_name"
              className="login-input-field"
              onChange={updateFirstName}
              value={firstName}
            ></input>
          </div>
          <div>
            <label className="login-labels">Last Name</label>
            <input
              type="text"
              name="last_name"
              className="login-input-field"
              onChange={updateLastName}
              value={lastName}
            ></input>
          </div>
          <div>
            <label className="login-labels">User Name</label>
            <input
              type="text"
              name="username"
              className="login-input-field"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label className="login-labels">Email</label>
            <input
              type="text"
              name="email"
              className="login-input-field"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label className="login-labels">Password</label>
            <input
              type="password"
              name="password"
              className="login-input-field"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label className="login-labels">Confirm Password</label>
            <input
              type="password"
              name="repeat_password"
              className="login-input-field"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button className="auth-form-buttons" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
