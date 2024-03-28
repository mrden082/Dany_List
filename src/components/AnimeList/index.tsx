import React from "react";

type Anime = {
  id: number;
  title: string;
};

type AnimeListProps = {
  animeList: Anime[];
};

const AnimeList: React.FC<AnimeListProps> = ({ animeList }) => {
  return (
    <div>
      {animeList.map((anime: Anime) => (
        <div key={anime.id}>{anime.title}</div>
      ))}
    </div>
  );
};

export default AnimeList;
