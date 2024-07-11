import { useQueries, useQuery } from '@tanstack/react-query';
import { IGET_MATCH_BY_MATCH_ID_INPUT, IGET_MATCH_IDS_BY_PUUID_INPUT } from '@/_model/matches';
import queryOptions from './queries';
import { IGET_LEAGUE_BY_ID_INPUT } from '@/_model/league';

export function useLeagueById({ id }: IGET_LEAGUE_BY_ID_INPUT) {
  return useQuery(queryOptions['league-by-id']({ id }));
}
