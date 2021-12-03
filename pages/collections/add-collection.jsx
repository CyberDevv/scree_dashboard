import Head from 'next/head';

import AddCollection from '../../components/page_components/AddCollection.jsx';

const AddCollectionPage = () => {
   return (
      <>
         <Head>
            <title>Add Collection | Scree Dashboard</title>
         </Head>

         <AddCollection />
      </>
   );
};

export default AddCollectionPage;
