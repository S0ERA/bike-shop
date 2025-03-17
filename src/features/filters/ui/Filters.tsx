import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import {filterOptions} from '@/features/filters/model/filterOptions'
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
} from '@/features/filters/ui/styles';

export function Filters() {
  const dispatch = useAppDispatch();
  const { type, brand, frameSize, inStock, sortBy } = useAppSelector((state) => state.filters);

  return (
    <FiltersWrapper>
      <FilterSelect value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))}>
        {filterOptions.sortBy.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FilterSelect>

      <FilterSelect value={type} onChange={(e) => dispatch(setType(e.target.value))}>
        {filterOptions.type.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FilterSelect>

      <FilterSelect value={brand} onChange={(e) => dispatch(setBrand(e.target.value))}>
        {filterOptions.brand.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FilterSelect>

      <FilterSelect value={frameSize} onChange={(e) => dispatch(setFrameSize(e.target.value))}>
        {filterOptions.frameSize.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
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