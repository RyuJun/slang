import { IGET_SUMMONER_BY_PUUID_INPUT, IGET_SUMMONER_BY_RIOT_ID_INPUT, IGET_SUMMONER_BY_RIOT_ID_OUTPUT } from '@/_model/summoner';
import ServiceLoLKR from '@/_service/lol-kr-service';
import ServiceRiot from '@/_service/riot-service';

const queryKeys = {
  'by-riot-id': (gameName: string, tagLine: string) => ['summoner', 'by-riot-id', `${gameName}#${tagLine}`] as const,
  'by-puuid': (puuid: string) => ['summoner', 'by-puuid', puuid ? puuid : '#'] as const,
};

const queryOptions = {
  'by-riot-id': ({ gameName, tagLine }: IGET_SUMMONER_BY_RIOT_ID_INPUT) => {
    return {
      queryKey: queryKeys['by-riot-id'](gameName, tagLine),
      queryFn: () => ServiceRiot.getSummonerByRiotId({ gameName, tagLine }),
      enabled: Boolean(gameName && tagLine),
    };
  },
  'by-puuid': ({ puuid }: IGET_SUMMONER_BY_PUUID_INPUT) => {
    return {
      queryKey: queryKeys['by-puuid'](puuid),
      queryFn: () => ServiceLoLKR.getSummonerByPuuId({ puuid }),
      enabled: Boolean(puuid),
    };
  },
};

export default queryOptions;
