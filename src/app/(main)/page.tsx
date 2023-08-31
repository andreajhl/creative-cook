import { type Metadata } from 'next';
import { BiFoodMenu } from 'react-icons/bi';
import { IoMdFitness, IoMdNutrition } from 'react-icons/io';
import Carousel from '../../components/ui/carousel';
import BannerCategories from '../../components/categories/bannerCategories';
import { carouselImages } from '../../constants/carousel';
import wordings from '../../wordings';

export const metadata: Metadata = {
  title: 'Creative Cook',
  description: 'Get all the recipes you need for your day to day.'
};

const Page = () => {
  const { home: { banner: { health, table, recipes } } } = wordings;

  return (
    <main>
      <Carousel pictures={carouselImages} />
      <div className="flex justify-center text-center h-52 pb-4 pt-4 w-full">
        <div className="h-full w-1/3 flex flex-col justify-start items-center p-4" data-testid="card-info">
          <h3 className="text-4xl pb-4"><BiFoodMenu /></h3>
          <h3 className="text-title font-bold text-sm md:text-xl lg:md:text-2xl uppercase">
            {recipes.title}
          </h3>
          <h4 className="text-sx font-light">{recipes.subtitle}</h4>
        </div>
        <div className="h-full w-1/3 border-x border-x-gray-300 flex flex-col justify-start items-center p-4" data-testid="card-info">
          <h3 className="text-4xl pb-4"><IoMdFitness /></h3>
          <h3 className="text-title font-bold text-sm md:text-xl lg:md:text-2xl uppercase">
            {health.title}
          </h3>
          <h4 className="text-sx font-light">{health.subtitle}</h4>
        </div>
        <div className="h-full w-1/3 flex flex-col justify-start items-center p-4" data-testid="card-info">
          <h3 className="text-4xl pb-4"><IoMdNutrition /></h3>
          <h3 className="text-title font-bold text-sm md:text-xl lg:md:text-2xl uppercase">
            {table.title}
          </h3>
          <h4 className="text-sx font-light">{table.subtitle}</h4>
        </div>
      </div>
      <BannerCategories />
    </main>
  );
};

export default Page;
