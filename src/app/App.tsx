import { RouterProvider } from 'react-router';
import { routes } from '@/app/providers/routes';
import { GlobalStyles } from '@/shared/ui/globalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/app/theme';
import { useAppSelector } from '@/shared/hooks/hooks';

function App() {
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
