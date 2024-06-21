import queryOptions from '@/_service/summoner/queries';
import { Hydrate, getDehydratedQuery, getQueryClient } from '@/_utils/react-query';

import React from 'react';
import AvartaClient from '../client/AvartaClient';
import { User } from '@nextui-org/react';

const gameName = '류뚝딱';
const tagLine = 'KR1';

export default async function AvartaServer() {
  const { queryKey, queryFn } = queryOptions['by-riot-id']({ gameName, tagLine });
  const queries = await getDehydratedQuery({ queryKey, queryFn });
  return (
    <Hydrate state={queries}>
      <User name="asdfasdf" description="asdfhjklasddfjkasdlf" />
      <AvartaClient />
    </Hydrate>
  );
}
