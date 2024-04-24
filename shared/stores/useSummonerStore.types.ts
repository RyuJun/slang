import { Nullable } from "@/utils/common.types";

export interface ISummoner {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

export interface ISummonerStore {
  summoner: Nullable<ISummoner>;
  setSummoner: (props: ISummoner) => void;
}
