'use client';

import { useMemo } from 'react';
import classNames from 'classnames';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { VISIBLE_PAGES } from '@/constants/api';
import { MAX_ITEMS_PAGINATION } from '@/constants/pagination';
import { PaginationProps } from '@/interfaces/components/pagination';

const Pagination = ({ setCurrentPag, currentPage, setItems, getNewItemsPage }: PaginationProps) => {
  const totalPages = useMemo(() => new Array(MAX_ITEMS_PAGINATION).fill(0), []);
  const disablePrevBtn = useMemo(() => (currentPage - 1 < 0), [currentPage]);
  const disableNextBtn = useMemo(() => (currentPage + 1 > 2), [currentPage]);

  const nextPage = () => {
    const next = currentPage + 1;
    const index = next * VISIBLE_PAGES;

    setItems(getNewItemsPage(index));
    setCurrentPag(next);
  };

  const prevPage = () => {
    const prev = currentPage - 1;
    const index = prev * VISIBLE_PAGES;

    setItems(getNewItemsPage(index));
    setCurrentPag(prev);
  };

  const updateIndexPage = (value: number) => {
    const index = value * VISIBLE_PAGES;

    setItems(getNewItemsPage(index));
    setCurrentPag(value);
  };

  return (
    <div className="mx-auto w-full flex flex-row justify-center items-center mt-12">
      <button
        onClick={prevPage}
        disabled={disablePrevBtn}
        data-testid="prev-button"
        className="hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l border h-8 pb-4"
      >
        <SlArrowLeft />
      </button>
      {
        totalPages.map((_, index: number) => (
          <button
            key={index}
            data-testid={`btn-page-${index}`}
            onClick={() => { updateIndexPage(index); }}
            className={
              classNames(
                'hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l border h-8 pb-4',
                { 'bg-gray-400 text-white': index === currentPage }
              )
            }
          >
            {index + 1}
          </button>
        ))
      }
      <button
        onClick={nextPage}
        disabled={disableNextBtn}
        data-testid="next-button"
        className="hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l border h-8 pb-4"
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
