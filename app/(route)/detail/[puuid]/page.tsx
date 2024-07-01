import queryOptions from '@/_service/match/queries';
import React from 'react';
import { Hydrate, getDehydratedQueries, getDehydratedQuery } from '@/_utils/react-query';
import { NextConfig } from 'next';
import NavBar from '@/_components/NavBar/NavBar';
import MatchLists from '../_components/server/MatchLists';

export default async function Page({ params }: NextConfig) {
  const { puuid } = params;
  // const { queryKey: matchIdsQueryKey, queryFn: matchIdsQueryFn } = queryOptions['match-ids']({ puuid });
  // const dehydratedMatchIds = await getDehydratedQuery({ queryKey: matchIdsQueryKey, queryFn: matchIdsQueryFn });

  // const matchIds = await matchIdsQueryFn();
  // const matches = matchIds.map((matchId) => {
  //   return queryOptions.match({ matchId });
  // });

  // const dehydreatedMatches = await getDehydratedQueries(matches);

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <MatchLists puuid={puuid} />
    </div>
  );
}

/*  <div className="p-8 flex">
<Suspense fallback={<div>Loading...</div>}>
        <UserInfo
          data={fetch(
            `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
            {
              headers: {
                "X-Riot-Token": process.env.RIOT_API_KEY,
              },
            } as ExtendsRequestOptions
          )}
        />
      </Suspense>
</div> */
