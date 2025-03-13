import { Bike } from '@/shared/api/bikesApi';
import { IFilters } from '@/entities/filters/model/slice';

export const filterBikes = (bikes: Bike[], filters: IFilters): Bike[] => {
  const { type, brand, priceRange, frameSize, inStock } = filters;

  return bikes.filter((item) => {
    const matchesType = type === '' || item.type === type;
    const matchesBrand = brand === '' || item.brand === brand;
    const matchesPriceRange = item.price >= priceRange[0] && item.price <= priceRange[1];
    const matchesFrameSize = frameSize === '' || item.specifications.frameSize.includes(frameSize);
    const matchesInStock = !inStock || item.inStock;

    return matchesType && matchesBrand && matchesPriceRange && matchesFrameSize && matchesInStock;
  });
};
