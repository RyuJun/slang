import queryOptions from '@/_service/match/queries';
import { Hydrate, getDehydratedQueries, getDehydratedQuery } from '@/_utils/react-query';
import { MatchLists as MatchListsClient } from '../../client/MatchLists/MatchLists';
import React from 'react';

export default async function MatchLists({ puuid }: { puuid: string }) {
  const { queryKey: matchIdsQueryKey, queryFn: matchIdsQueryFn } = queryOptions['match-ids']({ puuid });
  let dehydreatedQueries = await getDehydratedQuery({ queryKey: matchIdsQueryKey, queryFn: matchIdsQueryFn });

  const matchIds = (dehydreatedQueries.queries.find((query) => query.queryKey === matchIdsQueryKey)?.state?.data || []) as string[];
  const matches = matchIds.map((matchId) => queryOptions.match({ matchId }));

  dehydreatedQueries = await getDehydratedQueries(matches);

  return (
    <Hydrate state={dehydreatedQueries}>
      <div className="flex flex-col p-5 w-full max-w-[1024px]">
        <MatchListsClient matchIds={matchIds} />
      </div>
    </Hydrate>
  );
}
