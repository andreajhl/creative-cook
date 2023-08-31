'use client';

import { redirect } from 'next/navigation';
import RecipeList from '@/components/recipes/recipeList';
import { arrayIsEmpty } from '@/utils/arrays';
import { getRecipeByCategory } from '@/client';
import { ParamsProps } from '@/interfaces/pages';

const Page = async ({ params }: ParamsProps) => {
  const data = await getRecipeByCategory(params.id);

  if (!data || arrayIsEmpty(data)) redirect('/404');

  return (<RecipeList recipeList={data} />);
};

export default Page;
