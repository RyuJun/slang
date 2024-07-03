import queryOptions from '@/_service/match/queries';
import { useMatchByMatchId, useMatchIdsByPuuid } from '@/_service/match/useMatchService';
import { Hydrate, getDehydratedQueries, getDehydratedQuery } from '@/_utils/react-query';
import { MatchLists as MatchListsClient } from '../../client/MatchLists/MatchLists';
import React from 'react';
import MatchListSkeleton from '../../Skeletons/MatchListSkeleton';

export default async function MatchLists({ puuid }: { puuid: string }) {
  const { queryKey: matchIdsQueryKey, queryFn: matchIdsQueryFn } = queryOptions['match-ids']({ puuid });
  const matchIds = await matchIdsQueryFn();
  const matches = matchIds.map((matchId) => queryOptions.match({ matchId }));

  let dehydreatedQueries = await getDehydratedQuery({ queryKey: matchIdsQueryKey, queryFn: matchIdsQueryFn });
  dehydreatedQueries = await getDehydratedQueries(matches);

  return (
    <Hydrate state={dehydreatedQueries}>
      <div className="flex flex-col p-5 w-full max-w-[1024px]">
        <MatchListsClient matchIds={matchIds} />
      </div>
    </Hydrate>
  );
}
