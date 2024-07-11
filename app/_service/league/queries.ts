import { IGET_LEAGUE_BY_ID_INPUT } from '@/_model/league';
import lolKrService from '../lol-kr-service';

const queryKeys = {
  'league-by-id': (id: string) => ['league', 'league-by-id', `${id}`] as const,
};

const queryOptions = {
  'league-by-id': ({ id }: IGET_LEAGUE_BY_ID_INPUT) => {
    return {
      queryKey: queryKeys['league-by-id'](id),
      queryFn: async () => {
        const url = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`;
        const headers = { 'X-Riot-Token': `${process.env.NEXT_PUBLIC_RIOT_API_KEY}` };
        try {
          const response = await fetch(url, {
            headers,
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
          return responseData;
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      },
    };
  },
};

export default queryOptions;
