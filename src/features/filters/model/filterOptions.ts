export const filterOptions = {
  sortBy: [
    { value: '', label: 'Сортировать по' },
    { value: 'priceAsc', label: 'Цена (дешевле)' },
    { value: 'priceDesc', label: 'Цена (дороже)' },
    { value: 'popularity', label: 'Популярность' },
  ],
  type: [
    { value: '', label: 'Все типы' },
    { value: 'mountain', label: 'Горный' },
    { value: 'road', label: 'Шоссейный' },
    { value: 'city', label: 'Городской' },
  ],
  brand: [
    { value: '', label: 'Все производители' },
    { value: 'TrekStar', label: 'TrekStar' },
    { value: 'UrbanRide', label: 'UrbanRide' },
    { value: 'SpeedTech', label: 'SpeedTech' },
  ],
  frameSize: [
    { value: '', label: 'Все размеры' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ],
};