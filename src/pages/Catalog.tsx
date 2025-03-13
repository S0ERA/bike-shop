import { useGetAllBikesQuery } from '@/shared/api/bikesApi';
import { useAppSelector, useCartActions, useFilteredAndSortedBikes } from '@/shared/hooks/hooks';
import { Filters } from '@/features/catalog/ui/Filters/Filters';
import { BikeList } from '@/features/catalog/ui/BikeList';
import { CatalogWrapper } from '@/features/catalog/ui/styles';

export function Catalog() {
  const { data, isLoading, isError } = useGetAllBikesQuery();
  const cartItems = useAppSelector((state) => state.cart.items);
  const filteredAndSortedBikes = useFilteredAndSortedBikes(data || []);
  const { handleAddToCart, handleUpdateQuantity } = useCartActions();

  if (isLoading) return <h1 className="loadErr">Loading...</h1>;
  if (isError) return <h1 className="loadErr">Error...</h1>;

  return (
    <CatalogWrapper>
      <h1 className="pageName">Каталог</h1>
      <Filters />
      <BikeList
        bikes={filteredAndSortedBikes}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </CatalogWrapper>
  );
}
