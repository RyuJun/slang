import { IGET_MATCH_BY_MATCH_ID_INPUT, IGET_MATCH_IDS_BY_PUUID_INPUT } from '@/_model/matches';
import ServiceLoL from '@/_service/lol-service';
import ServiceRiot from '@/_service/riot-service';

const queryKeys = {
  'match-ids': (puuid: string) => ['match', 'match-ids', `${puuid}`] as const,
  match: (matchId: string) => ['match', `${matchId}`] as const,
};

const queryOptions = {
  'match-ids': ({ puuid }: IGET_MATCH_IDS_BY_PUUID_INPUT) => {
    return {
      queryKey: queryKeys['match-ids'](puuid),
      queryFn: () => ServiceLoL.getMatchIdsByPuuid({ puuid }),
    };
  },
  match: ({ matchId }: IGET_MATCH_BY_MATCH_ID_INPUT) => {
    return {
      queryKey: queryKeys.match(matchId),
      queryFn: () => ServiceLoL.getMatchByMatchId({ matchId }),
    };
  },
};

export default queryOptions;
