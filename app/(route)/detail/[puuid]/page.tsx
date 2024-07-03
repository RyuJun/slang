import React, { Suspense } from 'react';
import { NextConfig } from 'next';
import NavBar from '@/_components/NavBar/NavBar';
import MatchLists from '../_components/server/MatchLists/MatchLists';
import MatchListSkeleton from '../_components/Skeletons/MatchListSkeleton';

export default async function Page({ params }: NextConfig) {
  const { puuid } = params;
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <Suspense fallback={<MatchListSkeleton />}>
        <MatchLists puuid={puuid} />
      </Suspense>
    </div>
  );
}
