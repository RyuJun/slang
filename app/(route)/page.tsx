"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useId } from "react";

import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/_components/icons/SearchIcon";
import InputSearch from "@/_components/InputSearch/InputSearch";
import { LogoIcon } from "@/_components/icons/LogoIcon";
import { RiotAPI } from "@/_config/apis";

const gameName = "류뚝딱";
const tagLine = "KR1";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["get-puuid"],
    queryFn: () => {
      return RiotAPI.get(
        `/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
      );
    },
  });
  return <></>;
}
