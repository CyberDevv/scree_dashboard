import Head from 'next/head';
import Products from '../../components/page_components/Products.jsx';

export default function ProductsPage() {
   return (
      <>
         <Head>
            <title>Products | Scree Dashboard</title>
         </Head>

         <Products />
      </>
   );
}
