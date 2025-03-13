import { Bike } from '@/shared/api/bikesApi';
import { BikeCard } from '@/features/catalog/ui/BikeCard';
import { BikeListWrapper } from '@/features/catalog/ui/styles';

interface BikeListProps {
  bikes: Bike[];
  cartItems: { id: string; quantity: number }[];
  onAddToCart: (item: Bike) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export function BikeList({ bikes, cartItems, onAddToCart, onUpdateQuantity }: BikeListProps) {
  return (
    <BikeListWrapper>
      {bikes?.map((item) => {
        const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <BikeCard
            key={item.id}
            item={item}
            quantity={quantity}
            onAddToCart={onAddToCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        );
      })}
    </BikeListWrapper>
  );
}
