import React  from "react";
import { Link, Outlet } from "react-router-dom";
import SearchAnime from "../../components/SearchAnime";
import { useStore } from "../../utils/store";

type Anime = {
  id: number;
  title: string;
};

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

const Root: React.FC = () => {

    function handleSearch(query: string): void {
        throw new Error("Function not implemented.");
    }

  return (
    <>
      <Navigation />
      <SearchAnime onSearch={handleSearch} />
      <Outlet />
    </>
  );
};

export default Root;
