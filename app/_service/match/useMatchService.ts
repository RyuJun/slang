import { useQueries, useQuery } from '@tanstack/react-query';
import { IGET_MATCH_BY_MATCH_ID_INPUT, IGET_MATCH_IDS_BY_PUUID_INPUT } from '@/_model/matches';
import queryOptions from './queries';

export function useMatchIdsByPuuid({ puuid }: IGET_MATCH_IDS_BY_PUUID_INPUT) {
  return useQuery(queryOptions['match-ids']({ puuid }));
}

export function useMatchesByMatchId({ matchIds }: { matchIds: string[] }) {
  return useQueries({ queries: matchIds.map((matchId) => queryOptions['match']({ matchId })) });
}
