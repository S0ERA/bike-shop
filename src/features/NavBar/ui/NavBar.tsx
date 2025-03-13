import { useAppSelector } from '@/shared/hooks/hooks';
import { NavBarWrapper, NavLink } from '@/features/NavBar/ui/styles';
import { ThemeToggle } from '@/features/ThemeToggle/ui/ThemeToggle';

export function NavBar() {
  const cartItemsCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <NavBarWrapper>
      <NavLink to="/catalog">
        <span>Каталог</span>
      </NavLink>
      <NavLink to="/cart">
        <span>Корзина {cartItemsCount}</span>
      </NavLink>
      <ThemeToggle />
    </NavBarWrapper>
  );
}
