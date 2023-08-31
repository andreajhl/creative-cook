'use client';

import Image from 'next/image';
import Table from '../ui/table';
import wordings from '@/wordings';
import { RecipeDetailProps } from '@/interfaces/components/recipes/recipeDetail';

const RecipeDetail = ({ title, image, ingredients, nutrients, portions, tags }: RecipeDetailProps) => {
  const {
    nutritionTable, product: { infoNutritional, portion, ingredients: ingredientLabel },
  } = wordings;

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {
              tags.map(tag => (
                <li key={tag}>
                  <div className="flex items-center">
                    <p className="mr-2 text-sm font-medium text-gray-900">{tag}</p>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))
            }
          </ol>
        </nav>
        <div className="mx-auto flex flex-col max-w-2xl items-left pt-12 pb-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl uppercase">{title}</h1>
          <p className="mt-4 text-base">{portion} {portions}</p>
        </div>
        <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block relative h-800 w-full mb-8">
            <Image src={image} alt={title} fill={true} className="h-full w-full object-cover object-center"/>
          </div>
          <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block ">
            <div className="shadow-inner bg-slate-50 rounded-md lg:row-span-3 p-4">
              <h2 className="text-xl font-semibold tracking-tight mb-4 text-center text-gray-900 uppercase">{infoNutritional}</h2>
              <Table headers={nutritionTable} rows={nutrients} />
          </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:px-6 px-4 pb-16 pt-10 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">{ingredientLabel}</h2>
          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4">
              {
                ingredients.map(ingredient => (
                  <li className="text-gray-600 text-lg" key={ingredient}>{ingredient}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
