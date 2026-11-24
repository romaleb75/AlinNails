import './Heading.css';
function Heading() {
  return (
    <main>
      <div className="top-section">
        <div className="top-image">
          <img src="/images/top.jpg" alt="Top Image" />
        </div>
        <div className="top-buttons">
          <button className="login-button" onClick="">
            Login
          </button>
          <button className="register-button" onClick="">
            Register
          </button>
        </div>
        <div className="logo-image">
          <img src="/images/logo.png" alt="Logo" />
        </div>
      </div>
    </main>
  );
}

export default Heading;
