'use client';

import Link from 'next/link';
import wordings from '@/wordings';

const NotFound = () => {
  const { warnings: { pageNotFound } } = wordings;

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center w-full">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-title sm:text-5xl">{pageNotFound.title}</h1>
        <div className="flex justify-center items-start mt-6 w-full">
          <p className="text-base md:text-lg font-bold md:mr-2 text-gray-900">404 |</p>
          <p className="text-base text-justify md:text-lg text-gray-600">{pageNotFound.subtitle}</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            {pageNotFound.retry} &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
