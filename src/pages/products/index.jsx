import Head from 'next/head';
import { useCollection } from 'react-firebase-hooks/firestore';

import Products from '../../components/page_components/Products.jsx';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { database } from '../../firebase/index.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { load } from '../../features/productsSlice.js';

export default function ProductsPage() {
   const dispatch = useDispatch();

   // const [productsState, setProducts] = useState(null);

   const [products, productsLoading, productsError] = useCollection(
      query(collection(database, 'products'))
   );

   if (!productsLoading && products) {
      products.docs.map((doc) => {
         dispatch(load(doc.data()));
      });
   }

   return (
      <>
         <Head>
            <title>Products | Scree Dashboard</title>
         </Head>

         <Products />
      </>
   );
}
