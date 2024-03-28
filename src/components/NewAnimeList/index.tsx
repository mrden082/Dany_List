import React from "react";
import { useStore } from "../../utils/store";

type Anime = {
  id: number;
  title: string;
};

type NewAnimeListProps = {
  label: string;
};

const NewAnimeList: React.FC<NewAnimeListProps> = ({ label }) => {
  const favoriteAnime = useStore((state) => state.favoriteAnime);
  const plannedAnime = useStore((state) => state.plannedAnime);
  const watchedAnime = useStore((state) => state.watchedAnime);

  let animeList: Anime[] = [];

  if (label === "favorite") {
    animeList = favoriteAnime;
  } else if (label === "planned") {
    animeList = plannedAnime;
  } else if (label === "watched") {
    animeList = watchedAnime;
  }

  return (
    <div>
      {animeList.map((anime) => (
        <div key={anime.id}>{anime.title}</div>
      ))}
    </div>
  );
};

export default NewAnimeList;
