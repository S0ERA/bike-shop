import {useGetAllBikesQuery} from "@/bikesApi"
import bike from "@/assets/bike.png"
import {useAppSelector, useAppDispatch} from "@/app/store";
import {
    setType,
    setBrand,
    setFrameSize,
    setInStock,
    setPriceRange,
    setSortBy,
    resetFilters
} from "@/filtersSlice"
import { addToCart } from "@/cartSlice";

const filterBikes = (bikes, filters) => {
    const {type, brand, priceRange, frameSize, inStock} = filters;

    return bikes.filter ((item) => {
            const matchesType = type === "" || item.type === type;
            const matchesBrand = brand === "" || item.brand === brand;
            const matchesPriceRange =
                item.price >= priceRange[0] && item.price <= priceRange[1];
            const matchesFrameSize =
                frameSize === "" || item.specifications.frameSize.includes(frameSize);
            const matchesInStock = !inStock || item.inStock;

            return (
                matchesType &&
                matchesBrand &&
                matchesPriceRange &&
                matchesFrameSize &&
                matchesInStock
            )
        }
    );
}

const sortBikes = (bikes, sortBy) => {
    return bikes.sort((a, b) => {
        switch (sortBy) {
            case "priceAsc":
                return a.price - b.price;
            case "priceDesc":
                return b.price - a.price;
            case "popularity":
                return (b.rating || 0) - (a.rating || 0);
            default:
                return 0;
        }
    });
}

export function Catalog() {
    const {data, isLoading, isError} = useGetAllBikesQuery();
    const dispatch = useAppDispatch();
    const { type, brand, priceRange, frameSize, inStock, sortBy } = useAppSelector((state) => state.filters);

    const filteredData = filterBikes(data || [], {
        type,
        brand,
        priceRange,
        frameSize,
        inStock,
    });

    const sortedData = sortBikes(filteredData, sortBy)

    const limitedData = sortedData?.slice(0, 15);

    const handleAddToCart = (item) => {
        dispatch(
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1,
            })
        );
    };

    if (isLoading) return <h1 className="loadErr">Loading...</h1>
    if (isError) return <h1 className="loadErr">Error...</h1>;

    return (
        <div className="catalogWrapper">
            <h1 className="pageName">Каталог</h1>

            <div className="filters">
                <select
                    value={sortBy}
                    onChange={(e) =>
                        dispatch(setSortBy(e.target.value))}
                >
                    <option value="">Сортировать по</option>
                    <option value="priceAsc">Цена (дешевле)</option>
                    <option value="priceDesc">Цена (дороже)</option>
                    <option value="popularity">Популярность</option>
                </select>

                <select
                    value={type}
                    onChange={(e) =>
                        dispatch(setType(e.target.value))}
                >
                    <option value="">Все типы</option>
                    <option value="mountain">Горный</option>
                    <option value="road">Шоссейный</option>
                    <option value="city">Городской</option>
                </select>

                <select
                    value={brand}
                    onChange={(e) =>
                        dispatch(setBrand(e.target.value))}
                >
                    <option value="">Все производители</option>
                    <option value="TrekStar">TrekStar</option>
                    <option value="UrbanRide">UrbanRide</option>
                    <option value="SpeedTech">SpeedTech</option>
                </select>

                <select
                    value={frameSize}
                    onChange={(e) =>
                        dispatch(setFrameSize(e.target.value))}
                >
                    <option value="">Все размеры</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>

                <label>
                    <input
                        type="checkbox"
                        checked={inStock}
                        onChange={(e) => dispatch(setInStock(e.target.checked))}
                    />
                    Только в наличии
                </label>

                <button
                    className="resetButton"
                    onClick={() => dispatch(resetFilters())}
                >
                    Сбросить все фильтры
                </button>
            </div>

                <ul className="bikeList">
                    {limitedData?.map(item => (
                            <div className="bikeCard" key={item.id}>
                                <img className="bikeImg" src={bike} alt={item.name} />
                                <div className="bikeInfo">
                                    <h3 className="bikeName">{item.name}</h3>
                                    <p className="bikePrice">{item.price.toLocaleString("ru-RU")} ₽</p>
                                    <div className="bikeDetails">
                                        <p>Тип: {item.type}</p>
                                        <p>Производитель: {item.brand}</p>
                                        <p>Размер рамы: {item.specifications.frameSize.join(", ")}</p>
                                        <p className={item.inStock ? "green" : "red"}>
                                            {item.inStock ? "В наличии" : "Нет в наличии"}
                                        </p>
                                    </div>
                                    <button
                                        className="addToCartButton"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        В корзину
                                    </button>
                                </div>
                        </div>
                    ))}
                </ul>
        </div>
    )
}