import Head from 'next/head';

import Settings from '../components/page_components/Settings.jsx';

export default function SettingsPage() {
   return (
      <>
         <Head>
            <title>Settings | Scree Dashboard</title>
         </Head>

         <Settings />
      </>
   );
}

// Tailwind styles
