'use client';

import Image from 'next/image';
import Link from 'next/link';
import wordings from '@/wordings';
import { RecipeCardProps } from '@/interfaces/components/recipes/recipeCard';

const CardRecipe = ({ image, title, id, calories, quantityIngredients }: RecipeCardProps) => {
  const { product } = wordings;
  const redirect = `/items/${id}`;

  return (
    <section
      data-testid="card-recipe"
      className="bg-white w-full min-h-96 flex flex-col justify-between items-start max-w-sm rounded overflow-hidden shadow-lg rounded-md lg:aspect-none"
    >
      <Image src={image} className="w-full" alt={title} width={288} height={200}/>
      <div className="px-6 py-4 w-full h-2/5 flex flex-col justify-between text-gray-600">
        <Link href={redirect}>
          <h3 className="font-bold text-xl mb-2 text-center min-h-16">{title}</h3>
        </Link>
        <div className="flex justifu-between w-full pt-4 pb-2 mt-4 border-t orbder-y-neutral-400">
          <p className="w-1/2 flex boder-y-neutral-400 border-r-2 mr-4 pr-4">
            {calories} <span className="text-gray-400 ml-2">{product.calories}</span>
          </p>
          <p className="w-1/2 flex">
            {quantityIngredients} <span className="text-gray-400 ml-2">{product.ingredients}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardRecipe;
