'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type CardCategoryProps } from '@/interfaces/components/category';

const CardCategory = ({ url, title, id }: CardCategoryProps) => {
  const redirect = { pathname: `/category/${id}` };

  return (
    <Link href={redirect} data-testid={title} className="w-1/3 h-40 md:h-48 lg:h-56">
      <article data-testid="card-category" className="relative h-full w-full">
        <Image src={url} alt={title} fill={true} className="object-fill w-full h-full"/>
        <h3 className="absolute text-center top-2/4 bg-gradient-to-r from-brand-600 via-brand-300 to-brand-600 w-full pt-2 pb-2 shadow-lg shadow-gray-500/50 opacity-75">{title}</h3>
      </article>
    </Link>
  );
};

export default CardCategory;
