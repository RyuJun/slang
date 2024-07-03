'use client';
import { Skeleton } from '@nextui-org/react';
import React from 'react';

const MatchListSkeleton = (): React.ReactElement => {
  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <Skeleton className="h-10 w-5/5 rounded-lg" />
      <Skeleton className="h-10 w-5/5 rounded-lg" />
      <Skeleton className="h-10 w-5/5 rounded-lg" />
      <Skeleton className="h-10 w-5/5 rounded-lg" />
      <Skeleton className="h-10 w-5/5 rounded-lg" />
    </div>
  );
};

export default MatchListSkeleton;
