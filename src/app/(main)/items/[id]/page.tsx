'use client';

import { redirect } from 'next/navigation';
import RecipeDetail from '@/components/recipeDetail';
import { objectIsEmpty } from '@/utils/objects';
import { getRecipeByID } from '@/client';
import { ParamsProps } from '@/interfaces/pages';

const Page = async ({ params }: ParamsProps) => {
  const data = await getRecipeByID(params.id);

  if (!data || objectIsEmpty(data)) redirect('/404');

  return (<RecipeDetail {...data}/>);
};

export default Page;
