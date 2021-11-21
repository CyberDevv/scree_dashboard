import Head from 'next/head';

import Dashboard from '../components/page_components/Dashboard.jsx';

export default function Home() {
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
