'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RecipeList from '@/components/recipes/recipeList';
import { arrayIsEmpty } from '@/utils/arrays';
import { getRecipeByCategory } from '@/client';
import { ParamsProps } from '@/interfaces/pages';
import { RecipeList as RecipeItem } from '@/interfaces/client';
import Loading from '@/app/loading';

const Page = ({ params }: ParamsProps) => {
  const router = useRouter();

  const [recipeList, setRecipeList] = useState<RecipeItem[]>([]);

  const getRecipeList = async() => {
    const data = await getRecipeByCategory(params.id);

    if(!data) return router.push('/404');
    setRecipeList(data);
  };

  useEffect(() =>{ getRecipeList(); }, []);

  return (
    <>
      {
        arrayIsEmpty(recipeList)
          ? <Loading />
          : <RecipeList recipeList={recipeList} />
      }
    </>
  );
};

export default Page;
