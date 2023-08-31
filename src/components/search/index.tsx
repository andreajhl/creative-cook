'use client';

import { type ChangeEvent, type FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { normalizeText } from '@/utils/strings';
import wordings from '@/wordings';

const Search = () => {
  const { navbar: { placeholder } } = wordings;

  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const handleRedirect = () => {
    if (search.length) {
      router.push(`/items?search=${search}`);
      setSearch('');
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const normalizedText = normalizeText(event.target.value);
    setSearch(normalizedText);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRedirect();
  };

  return (
    <div className="lg:w-3/4 w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex justify-around shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
        <input
          className="w-3/4 focus:outline-none focus:shadow-outline"
          name="search"
          autoComplete="off"
          value={search}
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
