import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <h1>Create Account 💰</h1>
          <p>Start tracking your money today</p>
        </div>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <div className="input-box">
              <FiUser />
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <div className="input-box">
              <FiMail />
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-box">
              <FiLock />
              <input
                type="password"
                placeholder="Create a password"
              />
            </div>
          </div>

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;