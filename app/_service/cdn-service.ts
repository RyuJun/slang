import Service, { E_ApiType } from '@/_service/service';
import { IGET_SUMMONER_BY_PUUID_INPUT, IGET_SUMMONER_BY_PUUID_OUTPUT } from '@/_model/summoner';

class ServiceCDN extends Service {}

export default new ServiceCDN(E_ApiType.CDN);
