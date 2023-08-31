'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';
import RecipeDetail from '@/components/recipeDetail';
import { getRecipeByID } from '@/client';
import { ParamsProps } from '@/interfaces/pages';
import { RecipeDetailProps } from '@/interfaces/components/recipes/recipeDetail';

const Page = ({ params }: ParamsProps) => {
  const router = useRouter();

  const [recipeDetail, setRecipeDetail] = useState<RecipeDetailProps>();

  const getRecipeDetail = async() => {
    const data = await getRecipeByID(params.id);

    if(!data) return router.push('/404');
    setRecipeDetail(data);
  };

  useEffect(() =>{ getRecipeDetail(); }, []);

  return (
    <>
      {
        !recipeDetail
          ? <Loading />
          : <RecipeDetail {...recipeDetail}/>
      }
    </>
  );
};

export default Page;
