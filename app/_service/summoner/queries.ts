import { IGET_SUMMONER_BY_PUUID_INPUT, IGET_SUMMONER_BY_RIOT_ID_INPUT, IGET_SUMMONER_BY_RIOT_ID_OUTPUT } from '@/_model/summoner';
import SummonerServiceLoL from '@/_service/summoner/lol-service';
import SummonerServiceRiot from '@/_service/summoner/riot-service';

const queryKeys = {
  'by-riot-id': (gameName: string, tagLine: string) => ['summoner', 'by-riot-id', `${gameName}#${tagLine}`] as const,
  'by-puuid': (puuid: string) => ['summoner', 'by-puuid', puuid ? puuid : '#'] as const,
};

const queryOptions = {
  'by-riot-id': ({ gameName, tagLine }: IGET_SUMMONER_BY_RIOT_ID_INPUT) => {
    return {
      queryKey: queryKeys['by-riot-id'](gameName, tagLine),
      queryFn: () => SummonerServiceRiot.getSummonerByRiotId({ gameName, tagLine }),
      enabled: Boolean(gameName && tagLine),
    };
  },
  'by-puuid': ({ puuid }: IGET_SUMMONER_BY_PUUID_INPUT) => {
    return {
      queryKey: queryKeys['by-puuid'](puuid),
      queryFn: () => SummonerServiceLoL.getSummonerByPuuId({ puuid }),
      enabled: Boolean(puuid),
    };
  },
};

export default queryOptions;
