import { FC } from 'react';
import 'tailwindcss/tailwind.css';
import 'styles/index.css';

interface AppProps {}
const App: FC<AppProps> = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default App;
