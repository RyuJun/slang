import axios from "axios";

export const RiotAPI = axios.create({
  baseURL: "/riot",
  headers: { "X-Riot-Token": process.env.RIOT_API_KEY },
});

export const LolAPI = axios.create({
  baseURL: "/lol",
  headers: { "X-Riot-Token": process.env.RIOT_API_KEY },
});
