"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["summoners"],
    queryFn: () =>
      fetch(
        `/lol/summoner/v4/summoners/류뚝딱-KR1?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ).then((res) => res.json()),
  });

  console.log(data);
  return <>바보~</>;
}
