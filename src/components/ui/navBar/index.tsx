'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { IoMdCloseCircle, IoMdMenu } from 'react-icons/io';
import Search from '../../search';
import wordings from '@/wordings';

const NavBar = () => {
  const { nav } = wordings;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => { setMobileMenuOpen(!mobileMenuOpen); };

  return (
    <header className="bg-zinc-800 sticky top-0 w-full z-10 w-full">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8 max-w-screen-2xl w-full" aria-label="Global">
        <div className="flex lg:flex-1 w-4/5">
          <Link href="/" className="relative h-8 md:h-10 lg:h-12 w-2/4">
            <Image src="/images/home/brand.jpeg" alt="brand" fill={true} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex text-3xl items-center justify-center rounded-md p-2.5 text-white"
          >
            <IoMdMenu />
            <span className="hidden">{nav.menu}</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Search />
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={handleClick}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleClick}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
             <IoMdCloseCircle />
             <span className="hidden">{nav.close}</span>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6 w-full">
              <Search />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavBar;
