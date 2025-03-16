import { useAppSelector } from '@/shared/hooks/hooks';
import { darkTheme, lightTheme } from '@/app/theme';

export const useTheme = () => {
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);
  return isDarkTheme ? darkTheme : lightTheme;
};