import Head from 'next/head';

import Collections from '../components/page_components/Collections.jsx';

export default function CollectionsPage() {
   return (
      <>
         <Head>
            <title>Collections | Scree Dashboard</title>
         </Head>

         <Collections />
      </>
   );
}

// Tailwind styles
