import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Leaderboard</Link>
        </li>
        <li>
          <Link>New Poll</Link>
        </li>
      </ul>
    </nav>
  );
};
