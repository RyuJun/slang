import Service, { E_ApiType } from '@/_service/service';
import { IGET_SUMMONER_BY_RIOT_ID_INPUT, IGET_SUMMONER_BY_RIOT_ID_OUTPUT } from '@/_model/summoner';

class SummonerServiceRiot extends Service {
  getSummonerByRiotId({ gameName, tagLine }: IGET_SUMMONER_BY_RIOT_ID_INPUT) {
    return this.http.get<IGET_SUMMONER_BY_RIOT_ID_OUTPUT>(`/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
  }
}

export default new SummonerServiceRiot(E_ApiType.RIOT);
