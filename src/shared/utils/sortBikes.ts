import { Bike } from '@/shared/api/bikesApi';

export const sortBikes = (bikes: Bike[], sortBy: string): Bike[] => {
  return [...bikes].sort((a, b) => {
    switch (sortBy) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'popularity':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });
};
