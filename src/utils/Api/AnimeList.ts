import axios from "axios";

const fetchAnimeList = async () => {
  const url = "https://graphql.anilist.co";

  const query = `
    query {
      Page {
        media {
          id
          title {
            romaji
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(url, {
      query: query,
    });
    const { media } = response.data.data.Page;
    return media;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchAnimeList;