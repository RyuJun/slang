'use client';
import { useSummonerByRiotId } from '@/_service/summoner/useSummonerService';
import React from 'react';

const gameName = '류뚝딱';
const tagLine = 'KR1';
const AvartaClient = (): React.ReactElement => {
  const { data } = useSummonerByRiotId({ gameName, tagLine });
  return <div></div>;
};

export default AvartaClient;
