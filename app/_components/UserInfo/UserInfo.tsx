import React from "react";

interface RootObject {
  puuid: string;
  gameName: string;
  tagLine: string;
}

interface ISearchListBoxProps {
  data: Promise<Response>;
}
const UserDetail = async ({
  data,
}: ISearchListBoxProps): Promise<React.ReactElement> => {
  const sommoner = (await data.then((res) => res.json())) as RootObject;
  console.log(sommoner);
  return <>{sommoner.puuid}</>;
};

export default UserDetail;
