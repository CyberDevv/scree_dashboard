import Head from 'next/head';

import Products from '../components/page_components/Products.jsx';

export default function Home() {
   return (
      <>
         <Head>
            <title>Products | Scree Dashboard</title>
         </Head>

         <Products />
      </>
   );
}

// Tailwind styles
