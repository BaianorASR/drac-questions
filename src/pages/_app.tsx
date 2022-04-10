import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '../store/index.store';
import GlobalStyles from '../styles/global/index';
import defaultTheme from '../styles/theme/default';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
