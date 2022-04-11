import '../styles/global/index.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { TimerProvider } from '../context/Timer';
import { wrapper } from '../store/index.store';
import GlobalStyles from '../styles/global/index';
import defaultTheme from '../styles/theme/default';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TimerProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </TimerProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
