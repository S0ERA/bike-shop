import { Bike } from '@/shared/api/bikesApi';
import bike from '@/shared/assets/bike.png';
import {
  BikeCardWrapper,
  BikeDetails,
  BikeImg,
  BikeInfo,
  BikeName,
  BikePrice,
} from '@/features/catalog/ui/styles';
import { Buttons, QuantityButton, QuantityControls } from '@/shared/ui/Buttons';

interface BikeCardProps {
  item: Bike;
  quantity: number;
  onAddToCart: (item: Bike) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export function BikeCard({ item, quantity, onAddToCart, onUpdateQuantity }: BikeCardProps) {
  return (
    <BikeCardWrapper>
      <BikeImg src={bike} alt={item.name} />
      <BikeInfo>
        <BikeName>{item.name}</BikeName>
        <BikePrice>{item.price.toLocaleString('ru-RU')} ₽</BikePrice>
        <BikeDetails>
          <p>Тип: {item.type}</p>
          <p>Производитель: {item.brand}</p>
          <p>Размер рамы: {item.specifications.frameSize.join(', ')}</p>
          <p className={item.inStock ? 'green' : 'red'}>
            {item.inStock ? 'В наличии' : 'Нет в наличии'}
          </p>
        </BikeDetails>
        {quantity === 0 ? (
          <Buttons onClick={() => onAddToCart(item)}>В корзину</Buttons>
        ) : (
          <QuantityControls>
            <QuantityButton onClick={() => onUpdateQuantity(item.id, quantity - 1)}>
              -
            </QuantityButton>
            <span className="quantity">{quantity}</span>
            <QuantityButton onClick={() => onUpdateQuantity(item.id, quantity + 1)}>
              +
            </QuantityButton>
          </QuantityControls>
        )}
      </BikeInfo>
    </BikeCardWrapper>
  );
}
