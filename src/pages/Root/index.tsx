import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import fetchAnimeList from "../../utils/Api/AnimeList";
import home from "../../assets/home.png";
import favorite from "../../assets/favorite.png";
import planned from "../../assets/planned.png";
import watched from "../../assets/watched.png";
import "./root.css";

export const loader = async () => {
  const animeList = await fetchAnimeList();
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
              <img src={home} alt="home" />
            </Link>
          </li>
          <li>
            <Link to="/favorite" className="favorite">
              <img src={favorite} alt="favorite" />
            </Link>
          </li>
          <li>
            <Link to="/planned" className="planned">
              <img src={planned} alt="planned" />
            </Link>
          </li>
          <li>
            <Link to="/watched" className="watched">
              <img src={watched} alt="watched" />
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
    const fetchData = async () => {
      try {
        const response = await fetchAnimeList();
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
            <Link to={`/animeInfoPage/${anime.id}`} key={anime.id}>
              {anime.title.romaji}
            </Link>
          ))}
      </div>
      <Outlet />
    </>
  );
};

export default Root;
