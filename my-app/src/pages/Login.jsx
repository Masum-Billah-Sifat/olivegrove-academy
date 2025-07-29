import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('Student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agreed) {
      setError('You must agree to the terms.');
      return;
    }
    setError('');
    alert(`Signed up as ${role}: ${email}`);
  };

  return (
    <div className="login-container">
      <h2>Registration / Login</h2>

      <div className="role-selector">
        {['Student', 'Teacher', 'Institution'].map((r) => (
          <button
            key={r}
            className={role === r ? 'active' : ''}
            onClick={() => setRole(r)}
          >
            {r}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="forgot">Forgot password?</span>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <div className="error">{error}</div>}

        <label className="terms">
          <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
          I agree to the <span className="link">Terms and Conditions</span>
        </label>

        <button type="submit" className="signup-button">Sign up</button>

        <div className="divider">
          <span>Or</span>
        </div>

        <button type="button" className="google-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" />
          Continue with Google
        </button>

        <div className="footer-text">
          Already have an account? <span className="link">Log in</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
