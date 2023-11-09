import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';

import images from '../assets';
import { SignIn } from '.';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const [searchError, setSearchError] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
      <>
          <nav className="sm:flex sm:w-full sm:z-10 sm:p-4 sm:border-b sm:justify-between sm:bg-neutral-0 hidden">
              <div className="flex flex-row justify-start">
                  <Link href="/">
                      <div>
                          <Image
                              src={images.morent}
                              width={148}
                              height={44}
                              alt="logo"
                          />
                      </div>
                  </Link>
              </div>
              <div className="justify-end flex gap-4">
                  <div className="opacity-80 border border-blue-200 border-opacity-40 rounded-3xl w-[44px] h-[44px] items-center flex justify-center">
                      <Image
                          src={images.favorite}
                          onClick={() => {}}
                          width={20}
                          height={17.8}
                          alt="favorite"
                      />
                  </div>
                  <div className="opacity-80 border border-blue-200 border-opacity-40 rounded-3xl w-[44px] h-[44px] items-center flex justify-center">
                      <Image
                          src={images.bell}
                          onClick={() => {}}
                          width={20}
                          height={17.8}
                          alt="bell"
                      />
                  </div>
                  <div className="opacity-80 border border-blue-200 border-opacity-40 rounded-3xl w-[44px] h-[44px] items-center flex justify-center">
                      <Image
                          src={images.settings}
                          onClick={() => {}}
                          width={20}
                          height={17.8}
                          alt="settings"
                      />
                  </div>
                  <div className="opacity-80 border border-blue-200 border-opacity-40 rounded-3xl w-[44px] h-[44px] items-center flex justify-center flex-col">
                      <SignIn />
                  </div>
              </div>
          </nav>

          {/* Mobile view */}
          <nav className="sm:hidden w-full z-10 p-4 border-b justify-between bg-neutral-0">
              <div className="flex flex-row justify-between">
                  <Link href="/">
                      <div className="p-2">
                          <Image
                              src={images.menu}
                              width={24}
                              height={24}
                              alt="logo"
                          />
                      </div>
                  </Link>
                  <div className="opacity-80 border border-blue-200 border-opacity-40 rounded-3xl w-[44px] h-[44px] items-center flex justify-center flex-col">
                      <SignIn />
                  </div>
              </div>
              <div className="pt-4 p-2">
                  <Link href="/">
                      <div>
                          <Image
                              src={images.morent}
                              width={108}
                              height={24}
                              alt="logo"
                          />
                      </div>
                  </Link>
              </div>
              <div className="flex pt-4 p-2 gap-6">
                  <div className="border border-blue-200 border-opacity-40 rounded-md w-[263px] h-[48px] flex">
                      <div className="p-4">
                          <AiOutlineSearch value={{ size: '24px' }} />
                      </div>
                      <div className="items-center flex justify-center">
                          <input
                              type="text"
                              placeholder={`${
                                searchError
                                  ? 'Search Input Cannot be Empty'
                                  : 'Search Something Here'
                              }`}
                              value={searchInput}
                              onChange={(e) => setSearchInput(e.target.value)}
                          />
                      </div>
                  </div>
                  <div className="">
                      <Image
                          src={images.filters}
                          width={48}
                          height={48}
                          alt="logo"
                      />
                  </div>
              </div>

          </nav>
      </>
  );
};
export default Navbar;
