import { Provider } from 'react-redux';
import { GlobalStyles } from 'twin.macro';
import NextProgress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.css';

import store from '../features/index.store';

import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Provider store={store}>
            <NextProgress height={5} color='#FA5020' />
            <GlobalStyles />
            <Component {...pageProps} />
            <ToastContainer />
         </Provider>
      </>
   );
}

export default MyApp;
