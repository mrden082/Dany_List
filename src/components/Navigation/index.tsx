import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/favorite">Избранное</Link>
          </li>
          <li>
            <Link to="/planned">Запланированное</Link>
          </li>
          <li>
            <Link to="/watched">Просмотренное</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
