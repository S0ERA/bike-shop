import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { removeFromCart, updateQuantity, applyPromoCode, clearCart } from "@/cartSlice";
import { useState } from "react";

export function Cart() {
    const dispatch = useAppDispatch();
    const {items, promoCode, discount} = useAppSelector(state => state.cart);
    const [promoInput, setPromoInput] = useState("");

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const total = subtotal * (1 - discount);

    const handleApplyPromoCode = () => {
        dispatch(applyPromoCode(promoInput));
        setPromoInput("");
    };

        return (
            <div className="cartWrapper">
                <h1 className="pageName">Корзина</h1>

                <ul className="cartList">
                    {items.map((item) => (
                        <li key={item.id} className="cartItem">
                            <div className="itemInfo">
                                <h3 className="itemName">{item.name}</h3>
                                <p className="itemPrice">{item.price.toLocaleString("ru-RU")} ₽</p>
                            </div>
                            <div className="itemActions">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        dispatch(updateQuantity({id: item.id, quantity: parseInt(e.target.value)}))
                                    }
                                />
                                <button
                                    className="removeButton"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Удалить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="subtotal">
                    <p>Промежуточная сумма: {subtotal.toLocaleString("ru-RU")} ₽</p>
                </div>

                <div className="promoCode">
                    <input
                        type="text"
                        placeholder="Введите промокод"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                    />
                    <button onClick={handleApplyPromoCode}>Применить</button>
                </div>

                <div className="total">
                    <p>Итоговая сумма: {total.toLocaleString("ru-RU")} ₽</p>
                    {discount > 0 && <p>Скидка: {(discount * 100).toFixed(0)}%</p>}
                </div>

                <button className="clearCartButton" onClick={() => dispatch(clearCart())}>
                    Очистить корзину
                </button>
            </div>
        )
    }