import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Dashboard from '../components/page_components/Dashboard.jsx';

export default function Home() {
   const { push } = useRouter();

   
   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (!user) {
            push('/login');
         }
      });
   }, [push]);

   return (
      <>
         <Head>
            <title>Home | Scree Dashboard</title>
         </Head>

         <Dashboard />
      </>
   );
}