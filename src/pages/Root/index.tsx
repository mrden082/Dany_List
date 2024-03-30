import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import fetchAnimeList from "../../utils/api";
import "./root.css";

export const loader = async (id: number) => {
  const animeList = await fetchAnimeList(id);
  return animeList;
};

type Anime = {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
};

const Navigation: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="home">
              <img src="../../assets/home.png" alt="home" />
            </Link>
          </li>
          <li>
            <Link to="/favorite" className="favorite">
              <img src="../../assets/favorite.png" alt="favorite" />
            </Link>
          </li>
          <li>
            <Link to="/planned" className="planned">
              <img src="../../assets/planned.png" alt="planned" />
            </Link>
          </li>
          <li>
            <Link to="/watched" className="watched">
              <img src="../../assets/watched.png" alt="watched" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Root: React.FC = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [filterTitles, setFilterTitles] = useState<string>("");

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const response = await fetchAnimeList(id);
        setAnimeList(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <input
        className="search-input"
        placeholder="Filter"
        value={filterTitles}
        onChange={(e) => setFilterTitles(e.target.value)}
      />
      <div>
        {animeList
          .filter((anime) =>
            filterTitles === ""
              ? anime
              : anime.title.romaji
                  .toLowerCase()
                  .includes(filterTitles.toLowerCase())
          )
          .map((anime: Anime) => (
            <Link
              to={`/animeInfoPage/${anime.id}`}
              key={anime.id}
            >
              {anime.title.romaji}
            </Link>
          ))}
      </div>
      <Outlet />
    </>
  );
};

export default Root;
