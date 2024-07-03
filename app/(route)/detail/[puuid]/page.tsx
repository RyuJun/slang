import React, { Suspense } from 'react';
import {} from 'next';
import NavBar from '@/_components/NavBar/NavBar';
import MatchLists from '../_components/server/MatchLists/MatchLists';
import MatchListSkeleton from '../_components/Skeletons/MatchListSkeleton';

export default async function Page({ params }: any) {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <Suspense fallback={<MatchListSkeleton />}>
        <MatchLists puuid={params.puuid} />
      </Suspense>
    </div>
  );
}
