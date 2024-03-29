import { useState, useEffect } from "react";
import fetchAnimeList from "../../utils/api";

const AnimeInfo = ({ animeId }) => {
  const [media, setMedia] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [planned, setPlanned] = useState(false);
  const [watched, setWatched] = useState(false);

  const handleFavoriteChange = () => {
    setFavorite((prevValue) => !prevValue);
  };

  const handlePlannedChange = () => {
    setPlanned((prevValue) => !prevValue);
  };

  const handleWatchedChange = () => {
    setWatched((prevValue) => !prevValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAnimeList(animeId);
        setMedia(response.data.Media);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [animeId]);

  if (!media) {
    return <div>Loading...</div>;
  }

  const {
    title,
    characters,
    startDate,
    endDate,
    status,
    description,
    episodes,
  } = media;

  return (
    <div>
      <h2>{title.romaji}</h2>
      <div>
        <h3>Characters:</h3>
        <ul>
          {characters.nodes.map((character) => (
            <li key={character.name.full}>{character.name.full}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Start Date:</strong> {startDate.year}-{startDate.month}-
        {startDate.day}
      </div>
      <div>
        <strong>End Date:</strong> {endDate.year}-{endDate.month}-{endDate.day}
      </div>
      <div>
        <strong>Status:</strong> {status}
      </div>
      <div>
        <strong>Description:</strong> {description}
      </div>
      <div>
        <strong>Episodes:</strong> {episodes}
      </div>
      <div>
        <h3>Checkboxes:</h3>
        <label>
          Favorite
          <input
            type="checkbox"
            checked={favorite}
            onChange={handleFavoriteChange}
          />
        </label>
        <label>
          Planned
          <input
            type="checkbox"
            checked={planned}
            onChange={handlePlannedChange}
          />
        </label>
        <label>
          Watched
          <input
            type="checkbox"
            checked={watched}
            onChange={handleWatchedChange}
          />
        </label>
      </div>
    </div>
  );
};

export default AnimeInfo;
