import queryOptions from '@/_service/match/queries';
import { useMatchByMatchId, useMatchIdsByPuuid } from '@/_service/match/useMatchService';
import { Hydrate, getDehydratedQueries, getDehydratedQuery } from '@/_utils/react-query';
import { MatchLists as MatchListsClient } from '../client/MatchLists';
import React from 'react';

interface MatchListsProps {
  puuid: string;
}

export default async function MatchLists({ puuid }: MatchListsProps) {
  const { queryKey: matchIdsQueryKey, queryFn: matchIdsQueryFn } = queryOptions['match-ids']({ puuid });
  const dehydratedMatchIds = await getDehydratedQuery({ queryKey: matchIdsQueryKey, queryFn: matchIdsQueryFn });

  const matchIds = await matchIdsQueryFn();
  const matches = matchIds.map((matchId) => {
    return queryOptions.match({ matchId });
  });

  const dehydreatedMatches = await getDehydratedQueries(matches);

  return (
    <Hydrate state={dehydreatedMatches}>
      <div className="flex flex-col p-5 w-full max-w-[1000px]">
        <MatchListsClient matchIds={matchIds} />
      </div>
    </Hydrate>
  );
}
