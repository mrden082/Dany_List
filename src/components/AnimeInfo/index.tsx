import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchAnimeDetails from "../../utils/Api/AnimeDetails";
import Media from "../../utils/types";

const AnimeInfo = () => {
  const { animeId } = useParams<{ animeId: string }>();
  const [media, setMedia] = useState<Media | null>(null);
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
        const response = await fetchAnimeDetails(Number(animeId));
        setMedia(response);
      } catch (error) {
        console.error(error);
      }
    };
    if (animeId) {
      fetchData();
    }
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
      <h2>{title?.romaji}</h2>
      <div>
        <h3>Characters:</h3>
        {characters && (
          <ul>
            {characters.nodes.map((character) => (
              <li key={character.name.full}>{character.name.full}</li>
            ))}
          </ul>
        )}
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
