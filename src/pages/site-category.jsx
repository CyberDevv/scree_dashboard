import Head from 'next/head';

import SiteCategory from '../components/page_components/SiteCategory.jsx';

const SiteCategoryPage = () => {
   return (
      <>
         <Head>
            <title>Site Category | Scree Dashboard</title>
         </Head>

         <SiteCategory />
      </>
   );
};

export default SiteCategoryPage;
