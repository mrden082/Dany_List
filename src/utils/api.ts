import axios from "axios";

const fetchAnimeList = async () => {
  const variables = {
    id: 15125,
  };

  const query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

  const options = {
    url: "https://graphql.anilist.co",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  try {
    const response = await axios(options);
    const { media } = response.data.Page;
    console.log(media);
    return media;
  } catch (error) {
    throw new Error("Failed to fetch anime list");
  }
};

export default fetchAnimeList;
