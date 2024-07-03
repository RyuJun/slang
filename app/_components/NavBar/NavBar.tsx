import { Navbar, NavbarContent, NavbarItem, User } from '@nextui-org/react';
import InputSearch from '../InputSearch/InputSearch';
import { fontRussoOne } from '@/_config/fonts';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { LocalStorage } from '@/_config/storage';
import { ISummoner } from '@/_stores/useSummonerStore';
import { useEffect, useState } from 'react';

const NavBar = (): React.ReactElement => {
  return (
    <Navbar isBordered height="auto">
      <NavbarContent className="w-full h-100 py-5 gap-10">
        <NavbarItem className="grow-0 flex max-sm:hidden">
          <div className={clsx('text-4xl text-purple-600', fontRussoOne.className)}>SLANG</div>
        </NavbarItem>
        <NavbarItem className="w-full">
          <InputSearch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
