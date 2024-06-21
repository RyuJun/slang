import { Nullable } from '@/_utils/common.types';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { IGET_SUMMONER_BY_PUUID_OUTPUT, IGET_SUMMONER_BY_RIOT_ID_OUTPUT } from '@/_model/summoner';

export enum ESearchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ISummoner extends IGET_SUMMONER_BY_RIOT_ID_OUTPUT, IGET_SUMMONER_BY_PUUID_OUTPUT {
  searchStatus: ESearchStatus;
}

export const INITIAL_SUMMONER: ISummoner = {
  puuid: '',
  gameName: '',
  tagLine: '',
  id: '',
  accountId: '',
  profileIconId: 0,
  revisionDate: 0,
  summonerLevel: 0,
  searchStatus: ESearchStatus.IDLE,
};

interface ISummonerStore {
  summoner: ISummoner;
  setSummoner: (props: ISummoner) => void;
}
export const useSummonerStore = createWithEqualityFn<ISummonerStore>(
  (set) => ({
    summoner: INITIAL_SUMMONER,
    setSummoner: (props: ISummoner) => set(() => ({ summoner: props })),
  }),
  shallow,
);
