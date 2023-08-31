'use client';

import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { useDebounce } from '@/hooks/useDebounce';
import { normalizeText } from '@/utils/strings';
import wordings from '@/wordings';

const INTERVAL_TIME = 1500;

const Search = () => {
  const { navbar: { placeholder } } = wordings;

  const router = useRouter();
  const [search, setSearch] = useState<string>();

  const handleRedirect = () => {
    if (search) {
      router.push(`/items?search=${search}`);
      setSearch('');
    }
  };

  const debouncedRedirect = useDebounce(handleRedirect, INTERVAL_TIME);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const normalizedText = normalizeText(event.target.value);
    setSearch(normalizedText);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRedirect();
  };

  useEffect(() => {
    if (search) debouncedRedirect();
  }, [search]);

  return (
    <div className="lg:w-3/4 w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex justify-around shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
        <input
          className="w-3/4 focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          aria-label={placeholder}
          placeholder={placeholder}
        />
        <button type="submit">
          <PiMagnifyingGlassBold />
        </button>
      </form>
    </div>
  );
};

export default Search;
