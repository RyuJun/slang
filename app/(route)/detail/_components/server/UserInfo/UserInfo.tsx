import { Hydrate, getDehydratedQueries, getDehydratedQuery } from '@/_utils/react-query';
import React from 'react';
import { UserInfo as UserInfoClient } from '../../client/UserInfo/UserInfo';
import queryOptions from '@/_service/league/queries';

export default async function UserInfo({ id }: { id: string }) {
  const { queryKey: leagueByIdQueryKey, queryFn: leagueByIdQueryFn } = queryOptions['league-by-id']({ id });
  let dehydreatedQueries = await getDehydratedQuery({ queryKey: leagueByIdQueryKey, queryFn: leagueByIdQueryFn });

  return (
    <Hydrate state={dehydreatedQueries}>
      <div className="flex flex-col p-5 w-full max-w-[1024px]">
        <UserInfoClient id={id} />
      </div>
    </Hydrate>
  );
}
