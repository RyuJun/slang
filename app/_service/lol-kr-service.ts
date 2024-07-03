import Service, { E_ApiType } from '@/_service/service';
import { IGET_SUMMONER_BY_PUUID_INPUT, IGET_SUMMONER_BY_PUUID_OUTPUT } from '@/_model/summoner';

class ServiceLoLKR extends Service {
  getSummonerByPuuId({ puuid }: IGET_SUMMONER_BY_PUUID_INPUT) {
    return this.http.get<IGET_SUMMONER_BY_PUUID_OUTPUT>(`/summoner/v4/summoners/by-puuid/${puuid}`);
  }
}

export default new ServiceLoLKR(E_ApiType.LOLKR);
