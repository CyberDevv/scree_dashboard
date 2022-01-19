import { toast } from 'react-toastify';
import {
   addDoc,
   updateDoc,
   doc,
   collection,
   getDocs,
   query,
   where,
} from 'firebase/firestore';

import { database } from '../firebase/index';

export const addTask = async (uid, task, completed) => {
   try {
      const data = {
         uid,
         task,
         completed,
         createdAt: new Date().toISOString(),
      };

      await addDoc(collection(database, 'tasks'), data);

      toast.success('Task added successfully');

      return true;
   } catch (error) {
      toast.error(error.message);
   }
};

export const getTasks = async (uid) => {
   try {
      const tasks = [];

      const q = query(collection(database, 'tasks'), where('uid', '==', uid));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
         tasks.push({
            id: doc.id,
            ...doc.data(),
         });
      });

      return tasks;
   } catch (error) {
      toast.error(error.message);
   }
};

export const updateTask = async (id, task, completed) => {
   try {
      const data = {
         task,
         completed,
         updatedAt: new Date().toISOString(),
      };

      await updateDoc(doc(database, `tasks/${id}`), data);

      toast.success('Task updated successfully');

      return true;
   } catch (error) {
      toast.error(error.message);
   }
};
