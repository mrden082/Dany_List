import axios from "axios";

const fetchAnimeList = async (id: number) => {
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

  const variables = {
    id: id,
  };

  try {
    const response = await axios.post(url, {
      query: query,
      variables: variables,
    });
    const { media } = response.data.data.Page;
    return media;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchAnimeList;
