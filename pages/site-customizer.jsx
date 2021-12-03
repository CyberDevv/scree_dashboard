import Head from 'next/head';

import SiteCustomizer from '../components/page_components/SiteCustomizer.jsx';

const siteCustomizer = () => {
   return (
      <>
         <Head>
            <title>Site Customizer | Scree Dashboard</title>
         </Head>

         <SiteCustomizer />
      </>
   );
};

export default siteCustomizer;
