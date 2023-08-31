'use client';

import { categories } from '@/constants/categories';
import CardCategory from '../cardCategories';

const BannerCategories = () => (
  <div className="flex justify-center items-center mt-11">
    <div className="flex justify-center items-start w-full">
      {
        categories.map(category => (
          <CardCategory key={category.id} {...category} />
        ))
      }
    </div>
  </div>
);

export default BannerCategories;
