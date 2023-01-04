import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage">
      <h1>Work it</h1>
      <Link to="/Main">
        <button type="button">Main Page</button>
      </Link>
    </div>
  );
};

export default Home;
