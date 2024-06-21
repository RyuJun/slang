import { useQuery } from '@tanstack/react-query';
import queryOptions from '@/_service/summoner/queries';
import { IGET_SUMMONER_BY_PUUID_INPUT, IGET_SUMMONER_BY_RIOT_ID_INPUT } from '@/_model/summoner';

export function useSummonerByRiotId({ gameName, tagLine }: IGET_SUMMONER_BY_RIOT_ID_INPUT) {
  return useQuery(queryOptions['by-riot-id']({ gameName, tagLine }));
}

export function useSummonerByPuuid({ puuid }: IGET_SUMMONER_BY_PUUID_INPUT) {
  return useQuery(queryOptions['by-puuid']({ puuid }));
}
