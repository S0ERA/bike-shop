import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import {
  setType,
  setBrand,
  setFrameSize,
  setInStock,
  setSortBy,
  resetFilters,
} from '@/entities/filters/model/slice';
import {
  FilterCheckbox,
  FilterLabel,
  FilterSelect,
  FiltersWrapper,
  ResetButton,
} from '@/features/catalog/ui/Filters/styles';

export function Filters() {
  const dispatch = useAppDispatch();
  const { type, brand, frameSize, inStock, sortBy } = useAppSelector((state) => state.filters);

  return (
    <FiltersWrapper>
      <FilterSelect value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))}>
        <option value="">Сортировать по</option>
        <option value="priceAsc">Цена (дешевле)</option>
        <option value="priceDesc">Цена (дороже)</option>
        <option value="popularity">Популярность</option>
      </FilterSelect>

      <FilterSelect value={type} onChange={(e) => dispatch(setType(e.target.value))}>
        <option value="">Все типы</option>
        <option value="mountain">Горный</option>
        <option value="road">Шоссейный</option>
        <option value="city">Городской</option>
      </FilterSelect>

      <FilterSelect value={brand} onChange={(e) => dispatch(setBrand(e.target.value))}>
        <option value="">Все производители</option>
        <option value="TrekStar">TrekStar</option>
        <option value="UrbanRide">UrbanRide</option>
        <option value="SpeedTech">SpeedTech</option>
      </FilterSelect>

      <FilterSelect value={frameSize} onChange={(e) => dispatch(setFrameSize(e.target.value))}>
        <option value="">Все размеры</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </FilterSelect>

      <FilterLabel>
        <FilterCheckbox
          type="checkbox"
          checked={inStock}
          onChange={(e) => dispatch(setInStock(e.target.checked))}
        />
        Только в наличии
      </FilterLabel>

      <ResetButton onClick={() => dispatch(resetFilters())}>Сбросить все фильтры</ResetButton>
    </FiltersWrapper>
  );
}
