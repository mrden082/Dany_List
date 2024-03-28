import React from "react";
import AnimeInfo from "../../components/AnimeInfo";

const AnimeInfoPage = () => {
  const animeId = id;

  return (
    <div>
      <h1>Anime Info</h1>
      <AnimeInfo animeId={animeId} />
    </div>
  );
};

export default AnimeInfoPage;
