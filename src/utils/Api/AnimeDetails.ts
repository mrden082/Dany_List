import axios from "axios";

const fetchAnimeDetails = async (id: number) => {
  const url = "https://graphql.anilist.co";

  const query = `
    query ($id: Int) {
      Media (id: $id) {
        id
        title {
          romaji
        }
        // Другие поля, которые вам нужны
      }
    }
  `;

  const variables = {
    id: id,
  };

  try {
    const response = await axios.post(url, {
      query: query,
      variables: variables,
    });
    const { Media } = response.data.data;
    return Media;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchAnimeDetails;
