import React, { useState } from "react";
import AnimeList from "../../components/AnimeList";
import SearchAnime from "../../components/SearchAnime";
import fetchAnimeList from "../../utils/api";

type Anime = {
  id: number;
  title: string;
};

const Root: React.FC = () => {
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
    <div>
      <SearchAnime onSearch={handleSearch} />
      <AnimeList animeList={animeList} />
    </div>
  );
};

export default Root;
