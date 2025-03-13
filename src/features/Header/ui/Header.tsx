import logo from '@/shared/assets/logo.svg';
import { NavBar } from '../../NavBar/ui/NavBar';
import { Outlet } from 'react-router';
import { HeaderWrapper, Logo, LogoName } from '@/features/Header/ui/styles';

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <LogoName>-[ bike-shop ]-</LogoName>
        <NavBar />
      </HeaderWrapper>
      <main>
        <Outlet />
      </main>
    </>
  );
}
