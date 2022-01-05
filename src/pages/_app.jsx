import { GlobalStyles } from 'twin.macro';
import { Provider } from 'react-redux';

import store from '../features/index.store';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Provider store={store}>
            <GlobalStyles />
            <Component {...pageProps} />
         </Provider>
      </>
   );
}

export default MyApp;
