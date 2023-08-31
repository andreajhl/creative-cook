import wordings from '@/wordings';

const { home: { categories: { breakfast, brunch, snack } } } = wordings;

export const categories = [
  { url: '/images/category/breakfast.jpeg', title: breakfast, id: 'breakfast' },
  { url: '/images/category/brunch.jpeg', title: brunch, id: 'brunch' },
  { url: '/images/category/snack.jpeg', title: snack, id: 'teatime' }
];
