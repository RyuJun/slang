import React, { Suspense } from 'react';
import { NextPage } from 'next';
import NavBar from '@/_components/NavBar/NavBar';
import MatchLists from '../../_components/server/MatchLists/MatchLists';
import MatchListSkeleton from '../../_components/Skeletons/MatchListSkeleton';
import { cookies } from 'next/headers';
import UserInfo from '../../_components/server/UserInfo/UserInfo';

interface PageProps {
  params: {
    puuid: string;
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <Suspense fallback={<MatchListSkeleton />}>
        <UserInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<MatchListSkeleton />}>
        <MatchLists puuid={params.puuid} />
      </Suspense>
    </div>
  );
}
