'use client';
import { LocalStorage } from '@/_config/storage';
import { ESearchStatus, ISummoner, useSummonerStore } from '@/_stores/useSummonerStore';
import { Divider, Listbox, ListboxItem, Skeleton, User } from '@nextui-org/react';
import React, { Fragment, useEffect, useState } from 'react';

const UserSearchList = (): React.ReactElement => {
  const { summoner } = useSummonerStore((state) => ({ summoner: state.summoner }));
  const [isReady, setIsReady] = useState(false);
  const { getItem: getLocalStorageItem } = LocalStorage;
  const summonersStorageData = JSON.parse(getLocalStorageItem('summoners') || '[]');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsReady(true);
  }, []);

  if (!isReady) return <Fragment />;
  return (
    <div className="p-6 flex w-full justify-center">
      <Listbox className="w-full max-w-[1000px]" aria-label="Actions" onAction={(key) => alert(key)}>
        <ListboxItem
          key="fetchSummoner"
          className="text-secondary"
          startContent={
            <Fragment>
              {(summoner.searchStatus === ESearchStatus.IDLE || summoner.searchStatus === ESearchStatus.ERROR) && (
                <User
                  name="검색 결과가 없습니다."
                  description="소환사 이름 + #테그네임 으로 검색 해주세요."
                  avatarProps={{
                    src: `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/profileicon/0.png`,
                  }}
                />
              )}

              {summoner.searchStatus === ESearchStatus.LOADING && (
                <div className="max-w-[300px] w-full flex items-center gap-3">
                  <div>
                    <Skeleton className="flex rounded-full w-12 h-12" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                  </div>
                </div>
              )}

              {summoner.searchStatus === ESearchStatus.SUCCESS && (
                <User
                  name={summoner.gameName}
                  description={`LV.${summoner.summonerLevel}`}
                  avatarProps={{
                    src: `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/profileicon/${summoner.profileIconId}.png`,
                  }}
                />
              )}
            </Fragment>
          }
        />
        <ListboxItem key="divider">
          <Divider />
        </ListboxItem>

        {summonersStorageData.map((summoner: ISummoner) => (
          <ListboxItem key={summoner.puuid}>
            <User
              name={summoner.gameName}
              description={`LV.${summoner.summonerLevel}`}
              avatarProps={{
                src: `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/profileicon/${summoner.profileIconId}.png`,
              }}
            />
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
};

export default UserSearchList;
