import { useParams } from "react-router-dom";
import AnimeInfo from "../../components/AnimeInfo";

const AnimeInfoPage = () => {
  const { animeId } = useParams<{ animeId: string }>();

  return (
    <div>
      <h1>Anime Info</h1>
      <AnimeInfo animeId={Number(animeId)} />
    </div>
  );
};

export default AnimeInfoPage;
