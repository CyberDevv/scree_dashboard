import { toast } from 'react-toastify';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

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
      console.log(error);
   }
};

export const addProduct = async (
   uid,
   media,
   productName,
   tags,
   price,
   collections,
   productDesc
) => {
   try {
      const data = {
         uid,
         media,
         productName,
         tags,
         price,
         collections,
         productDesc,
         createdAt: new Date().toISOString(),
      };

      // console.log(data);

      const res = await addDoc(collection(database, 'products'), data);

      toast.success('Product added successfully');
      
      return true;
   } catch (error) {
      toast.error(error.message);
   }
};
