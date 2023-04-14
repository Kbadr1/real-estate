import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "9a877c48a6msh5f82ec123004cc2p1647b1jsn1ea17dafb95d",
    },
  });

  return data;
};
