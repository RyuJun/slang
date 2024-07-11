export interface IGET_LEAGUE_BY_ID_INPUT {
  id: string;
}

export type IGET_LEAGUE_BY_ID_OUTPUT = {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
};
