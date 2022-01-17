import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { database } from '../firebase/index';

export const getProducts = async (uid) => {
   try {
      const products = [];

      const q = query(
         collection(database, 'products'),
         where('uid', '==', uid)
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
         products.push({
            id: doc.id,
            ...doc.data(),
         });
      });
     
     return products;
   } catch (error) {
      toast.error(error.message);
      console.log(error)
   }
};