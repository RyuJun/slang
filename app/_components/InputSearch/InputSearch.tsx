'use client';

import { Input } from '@nextui-org/react';
import { SearchIcon } from '../icons/SearchIcon';
import React, { useEffect, useState } from 'react';
import { ESearchStatus, INITIAL_SUMMONER, useSummonerStore } from '@/_stores/useSummonerStore';
import debounce from 'lodash/debounce';
import { useSummonerByPuuid, useSummonerByRiotId } from '@/_service/summoner/useSummonerService';
import { LocalStorage } from '@/_config/storage';
import { IGET_SUMMONER_BY_RIOT_ID_OUTPUT } from '@/_model/summoner';
import { uniqBy } from 'lodash';
import { usePathname, useRouter } from 'next/navigation';

const InputSearch = (): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const { summoner, setSummoner } = useSummonerStore((state) => ({
    summoner: state.summoner,
    setSummoner: state.setSummoner,
  }));

  const [puuid, setPuuid] = useState<IGET_SUMMONER_BY_RIOT_ID_OUTPUT['puuid']>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { getItem: getLocalStorageItem, setItem: setLocalStorageItem } = LocalStorage;

  const { data: isRiotIdData, isSuccess: isRiotIdSuccess, isError: isRiotIdError } = useSummonerByRiotId({ gameName: summoner.gameName, tagLine: summoner.tagLine });
  const { data: isPuuidData, isSuccess: isPuuIdSuccess, isError: isPuuIdError } = useSummonerByPuuid({ puuid: puuid });

  const isError = isRiotIdError || isPuuIdError;

  const handleOnSearch = debounce((value: string) => {
    const [gameName, tagLine] = value.split('#');
    if (!gameName || !tagLine) {
      setErrorMessage('소환사 검색은 플레이어 이름 + #테그라인으로 검색해주세요.  ex) 류뚝딱#KR1');
      return;
    }
    setSummoner({ ...summoner, gameName, tagLine: tagLine.toUpperCase(), searchStatus: ESearchStatus.LOADING });
    setErrorMessage(null);
    setPuuid('');
  }, 1000);

  useEffect(() => {
    if (isRiotIdSuccess) setPuuid(isRiotIdData.puuid);
    if (isPuuIdSuccess) {
      const newSummoner = { ...summoner, ...isRiotIdData, ...isPuuidData, searchStatus: ESearchStatus.SUCCESS };
      const summonersStorageData = [...JSON.parse(getLocalStorageItem('summoners') || '[]'), newSummoner];
      setLocalStorageItem('summoners', JSON.stringify(uniqBy(summonersStorageData, 'puuid')));
      setSummoner(newSummoner);
    }
    if (isError) setSummoner({ ...INITIAL_SUMMONER, searchStatus: ESearchStatus.ERROR });
  }, [isRiotIdSuccess, isPuuIdSuccess, isError, puuid]);

  return (
    <div className="w-full max-sm:p-0 rounded-2xl flex justify-center items-center from-pink-500 to-yellow-500 text-white shadow-lg">
      <Input
        isClearable
        radius="md"
        classNames={{
          label: 'text-black/50 dark:text-white/90',
          input: ['bg-transparent', 'text-black/90 dark:text-white/90', 'placeholder:text-default-700/50 dark:placeholder:text-white/60'],
          innerWrapper: 'bg-transparent',
          inputWrapper: [
            'shadow-xl',
            'bg-default-100',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focus=true]:bg-default-200/50',
            'dark:group-data-[focus=true]:bg-default/60',
            '!cursor-text',
          ],
        }}
        placeholder="소환사 이름 + #테그라인"
        startContent={<SearchIcon width={18} height={18} className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />}
        description={'소환사 이름 + #테그라인으로 검색해주세요. ex) 류뚝딱#KR1'}
        errorMessage={errorMessage}
        onChange={(e) => handleOnSearch(e.target.value)}
        onFocus={() => {
          pathname.includes('detail') && router.push(`/`);
        }}
      />
    </div>
  );
};

export default InputSearch;
