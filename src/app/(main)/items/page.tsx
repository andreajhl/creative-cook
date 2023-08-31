'use client';

import { redirect } from 'next/navigation';
import RecipeList from '@/components/recipes/recipeList';
import { arrayIsEmpty } from '@/utils/arrays';
import { getRecipes } from '@/client';
import { ParamsProps } from '@/interfaces/pages';

const Page = async ({ searchParams }: ParamsProps) => {
  const data = await getRecipes(searchParams.search);

  if (!data || arrayIsEmpty(data)) redirect('/404');

  return (<RecipeList recipeList={data} />);
};

export default Page;
