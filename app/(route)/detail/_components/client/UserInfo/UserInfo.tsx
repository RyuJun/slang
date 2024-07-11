'use client';
import { useMatchesByMatchId } from '@/_service/match/useMatchService';
import React from 'react';
import { useLeagueById } from '@/_service/league/useLeagueService';

export const UserInfo = ({ id }: { id: string }): React.ReactElement => {
  const league = useLeagueById({ id });
  return <div>{JSON.stringify(league)}</div>;
};
