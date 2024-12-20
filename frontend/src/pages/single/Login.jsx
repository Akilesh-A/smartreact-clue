import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assetes/logo.png';
import '../../pages/single/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const homeNavigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const closebtn = () => {
    homeNavigate('/');
  };

  const handleChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_PRODUCT_API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful', data);
        homeNavigate('/dashboard');
      } else {
        setError(data.message || 'Login failed, please try again');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="loginContainer">
      <div className="container">
        <div className="row card-total">
          <div className="col-md-5">
            <div className="card-login">
              <div className="card-body">
                <button className="close-btn" onClick={closebtn}>
                  <FontAwesomeIcon icon="times" />
                </button>

                <img src={logo} alt="Logo" className="card-logo" />
                <h5 className="card-title">Game Club</h5>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter your Email"
                      onChange={handleChange}
                      value={email}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                      value={password}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
