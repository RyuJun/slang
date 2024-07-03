'use client';
import { LocalStorage } from '@/_config/storage';
import { ESearchStatus, ISummoner, useSummonerStore } from '@/_stores/useSummonerStore';
import { Divider, Listbox, ListboxItem, Skeleton, User } from '@nextui-org/react';
import { cloneDeep } from 'lodash';
import { useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const UserSearchList = (): React.ReactElement => {
  const router = useRouter();
  const { summoner, setSummoner } = useSummonerStore((state) => ({ summoner: state.summoner, setSummoner: state.setSummoner }));
  const [isReady, setIsReady] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);
  const { getItem: getLocalStorageItem, setItem: setLocalStorageItem } = LocalStorage;
  const summonersStorageData = JSON.parse(getLocalStorageItem('summoners') || '[]');

  const handleOnRemoveStorage = (puuid: string) => {
    const copySummuners = cloneDeep(summonersStorageData);
    copySummuners.splice(
      copySummuners.findIndex((summoner: ISummoner) => summoner.puuid === puuid),
      1,
    );
    setLocalStorageItem('summoners', JSON.stringify(copySummuners));
    setForceUpdate(!forceUpdate);
  };
  const handleOnMoveDetail = (puuid: string) => {
    if (!puuid) return;
    setSummoner(summonersStorageData.find((summoner: ISummoner) => summoner.puuid === puuid));
    router.push(`/detail/${puuid}`);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsReady(true);
  }, []);

  if (!isReady) return <Fragment />;
  return (
    <div className="p-6 flex w-full justify-center">
      <Listbox className="w-full max-w-[1000px]">
        <ListboxItem
          key="fetchSummoner"
          className="text-secondary"
          onClick={() => handleOnMoveDetail(summoner?.puuid)}
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
          <ListboxItem
            key={summoner.puuid}
            startContent={
              <User
                name={summoner.gameName}
                description={`LV.${summoner.summonerLevel}`}
                avatarProps={{
                  src: `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/profileicon/${summoner.profileIconId}.png`,
                }}
              />
            }
            endContent={
              <IoClose
                width={20}
                height={20}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOnRemoveStorage(summoner.puuid);
                }}
              />
            }
            onClick={() => handleOnMoveDetail(summoner.puuid)}
          />
        ))}
      </Listbox>
    </div>
  );
};

export default UserSearchList;
