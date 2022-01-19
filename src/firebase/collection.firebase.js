import { toast } from 'react-toastify';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { database } from '../firebase/index';

export const getCollections = async (uid) => {
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

export const addCollections = async (uid, collectionName, collectionImage) => {
   try {
      const data = {
         uid,
         collectionName,
         collectionImage,
         createdAt: new Date().toISOString(),
      };

      // console.log(data);

      const res = await addDoc(collection(database, 'collection'), data);

      toast.success('Collection added successfully');

      return true;
   } catch (error) {
      toast.error(error.message);
   }
};
