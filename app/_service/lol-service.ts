import Service, { E_ApiType } from '@/_service/service';
import { IGET_SUMMONER_BY_PUUID_INPUT, IGET_SUMMONER_BY_PUUID_OUTPUT } from '@/_model/summoner';
import { IGET_MATCH_BY_MATCH_ID_INPUT, IGET_MATCH_BY_MATCH_ID_OUTPUT, IGET_MATCH_IDS_BY_PUUID_INPUT, IGET_MATCH_IDS_BY_PUUID_OUTPUT } from '@/_model/matches';

class ServiceLoL extends Service {
  getMatchIdsByPuuid({ puuid }: IGET_MATCH_IDS_BY_PUUID_INPUT) {
    return this.http.get<IGET_MATCH_IDS_BY_PUUID_OUTPUT>(`/match/v5/matches/by-puuid/${puuid}/ids?start=1&count=2`, { next: { revalidate: 1200 } });
  }
  getMatchByMatchId({ matchId }: IGET_MATCH_BY_MATCH_ID_INPUT) {
    return this.http.get<IGET_MATCH_BY_MATCH_ID_OUTPUT>(`/match/v5/matches/${matchId}`, { next: { revalidate: 1200 } });
  }
}

export default new ServiceLoL(E_ApiType.LOL);
