import Head from 'next/head';

import AddProduct from '../../components/page_components/AddProduct.jsx';

const AddProductPage = () => {
   return (
      <>
         <Head>
            <title>Add Product | Scree Dashboard</title>
         </Head>

         <AddProduct />
      </>
   );
};

export default AddProductPage;
