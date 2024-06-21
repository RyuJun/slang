export interface IGET_SUMMONER_BY_RIOT_ID_INPUT {
  gameName: string;
  tagLine: string;
}

export interface IGET_SUMMONER_BY_RIOT_ID_OUTPUT {
  puuid: string;
  gameName: string;
  tagLine: string;
}

export interface IGET_SUMMONER_BY_PUUID_INPUT {
  puuid: string;
}

export interface IGET_SUMMONER_BY_PUUID_OUTPUT {
  id: string;
  accountId: string;
  puuid: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}
