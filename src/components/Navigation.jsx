import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/composer">Composer</Link>
        </li>
        <li>
          <Link to="/newsfeed">Newsfeed</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
