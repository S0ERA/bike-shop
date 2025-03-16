import { RouterProvider } from 'react-router';
import { routes } from '@/app/providers/routes';
import { GlobalStyles } from '@/shared/ui/globalStyles';
import { ThemeProvider } from 'styled-components';
import {useTheme} from '@/entities/theme/model/useTheme';

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;