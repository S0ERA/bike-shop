import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '@/app/providers/store';
import { Bike } from '@/shared/api/bikesApi';
import { filterBikes } from '@/features/catalog/model/filterBikes';
import { sortBikes } from '@/features/catalog/model/sortBikes';
import { addToCart, removeFromCart, updateQuantity } from '@/entities/cart/model/slice';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useFilteredAndSortedData = (data: Bike[]) => {
  const { type, brand, priceRange, frameSize, inStock, sortBy } = useAppSelector(
    (state) => state.filters,
  );

  const filteredData = filterBikes(data, {
    type,
    brand,
    priceRange,
    frameSize,
    inStock,
    sortBy,
  });

  const sortedData = sortBikes(filteredData, sortBy);

  return sortedData;
};

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: Bike) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      }),
    );
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return { handleAddToCart, handleUpdateQuantity };
};
