import Service, { E_ApiType } from '@/_service/service';
import { IGET_SUMMONER_BY_PUUID_INPUT, IGET_SUMMONER_BY_PUUID_OUTPUT } from '@/_model/summoner';

class SummonerServiceCDN extends Service {}

export default new SummonerServiceCDN(E_ApiType.CDN);
