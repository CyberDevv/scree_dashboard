import { GlobalStyles } from 'twin.macro';
import { useAuthState } from 'react-firebase-hooks/auth';
import { authentication } from '../firebase';
import { Provider } from 'react-redux';

import store from '../features/index.store';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   const [user, loading, error] = useAuthState(authentication);
   // console.log('loading:', loading, '|', 'current user:', user);
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
