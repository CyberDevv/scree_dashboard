import Head from 'next/head';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { useRouter } from 'next/router';
import Dashboard from '../components/page_components/Dashboard.jsx';
import { useDispatch } from 'react-redux';
import {useAuthState} from 'react-firebase-hooks/auth'
import { authentication } from '../firebase/index.js';

export default function Home() {
   const dispatch = useDispatch();
   const { push } = useRouter();

   
   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (!user) {
            push('/login');
         }
      });
   }, [push]);
   
   const [user, loading, error] = useAuthState(authentication);
   console.log(user)

   return (
      <>
         <Head>
            <title>Home | Scree Dashboard</title>
         </Head>

         <Dashboard />
      </>
   );
}

// Tailwind styles
