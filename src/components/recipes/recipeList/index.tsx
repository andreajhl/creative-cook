'use client';

import React, { useEffect, useState } from 'react';
import Pagination from '../../pagination';
import CardRecipe from '../cardRecipes';
import { RecipeListProps } from '@/interfaces/components/recipes/recipeList';
import { RecipeList as RecipeItem } from '@/interfaces/client';
import { VISIBLE_PAGES } from '@/constants/pagination';

const RecipeList = ({ recipeList }: RecipeListProps) => {
  const availablePages = recipeList.length / VISIBLE_PAGES;
  const visibilitiPages = availablePages > VISIBLE_PAGES ? VISIBLE_PAGES : availablePages;

  const [items, setItems] = useState<RecipeItem[]>();
  const [currentPage, setCurrentPag] = useState(0);

  const getNewItemsPage = (index: number) => [...recipeList].splice(index, VISIBLE_PAGES);

  useEffect(() => { setItems(getNewItemsPage(0)); }, [recipeList]);

  return (
    <div className="flex flex-col justify-between items-start mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:h-800">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          items?.map((item: RecipeItem, index: number) => (
            <CardRecipe {...item} key={index} />
          ))
        }
      </div>
      {
        visibilitiPages > 1 && (
          <Pagination
            setItems={setItems}
            currentPage={currentPage}
            setCurrentPag={setCurrentPag}
            getNewItemsPage={getNewItemsPage}
          />
        )
      }
    </div>
  );
};

export default RecipeList;
