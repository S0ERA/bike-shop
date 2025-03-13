import styled from 'styled-components';
import { TiStarFullOutline, TiWeatherSunny } from 'react-icons/ti';

export const SwitchContainer = styled.div<{ $isDarkTheme: boolean }>`
  width: 70px;
  height: 34px;
  background-color: ${({ theme }) => theme.palette.hover};
  border-radius: 34px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;
`;

export const Slider = styled.div<{ $isDarkTheme: boolean }>`
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  top: 4px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? 'calc(100% - 30px)' : '4px')};
  transition: all 0.4s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const Star = styled(TiStarFullOutline)`
  width: 1.5rem;
  position: absolute;
  left: calc(100% - 30px);
  top: 50%;
  transform: translateY(-50%);
`;

export const Sun = styled(TiWeatherSunny)`
  width: 1.5rem;
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
`;
