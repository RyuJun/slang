import UserInfo from '@/_components/UserInfo/UserInfo';
import queryOptions from '@/_service/summoner/queries';
import { RequestOptions } from 'https';
import React, { Suspense, useEffect } from 'react';
import { Hydrate, getDehydratedQuery } from '@/_utils/react-query';
import { User } from '@nextui-org/react';
import AvartaServer from '../_components/server/AvartaServer';

export default function Page() {
  return <AvartaServer />;
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
