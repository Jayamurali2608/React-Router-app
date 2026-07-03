import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to React Router App 🚀</h1>

      <p>
        This application demonstrates React Router concepts such as
        navigation, dynamic routing, and route handling.
      </p>

      <Link to="/users" className="hero-btn">
        Explore Users
      </Link>
    </div>
  );
}

export default Home;