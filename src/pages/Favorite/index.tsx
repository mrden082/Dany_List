import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchAnime from "../../components/SearchAnime";
import fetchAnimeList from "../../utils/api";

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

const Favorite: React.FC = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response: Anime[] = await fetchAnimeList();
      const filteredAnimeList = response.filter((anime) =>
        anime.title.toLowerCase().includes(query.toLowerCase())
      );
      setAnimeList(filteredAnimeList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navigation />
      <SearchAnime onSearch={handleSearch} />
      <Outlet />
    </>
  );
};

export default Favorite;
