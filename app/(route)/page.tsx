import NavBar from '@/_components/NavBar/NavBar';
import React, { Fragment } from 'react';
import UserSearchList from './_components/UserSearchList';

export default function Page() {
  return (
    <div className="flex flex-col justify-center h-full">
      <NavBar />
      <UserSearchList />
    </div>
  );
}
