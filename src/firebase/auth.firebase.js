import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   sendPasswordResetEmail,
   onAuthStateChanged,
   signInWithPopup,
   GoogleAuthProvider,
   signOut,
   confirmPasswordReset,
   FacebookAuthProvider,
   updateProfile,
   setPersistence,
   browserLocalPersistence,
   browserSessionPersistence,
} from 'firebase/auth';
import { toast } from 'react-toastify';

import { authentication } from './index';

export function login(email, password) {
   signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
         const { user } = response;

         localStorage.setItem('user', JSON.stringify(user));

         toast.success('Login Successful');
      })
      .catch((err) => {
         if (err.code === 'auth/user-not-found') {
            toast.error('Email not found');
         } else if (err.code === 'auth/wrong-password') {
            toast.error('Invalid Password');
         } else if (err.code === 'auth/invalid-email') {
            toast.error('Invalid Email');
         } else if (err.code === 'auth/internal-error') {
            toast.error('Missing Password');
         } else if (err.code === 'auth/too-many-requests') {
            toast.error(
               'Access to this account has been temporarily disabled due to too many failed login attempts. You can restore by resetting your password or try again later.'
            );
         } else {
            toast.error(err.message);
         }
         console.log(err);
      });
}

export function signInWithGoogle() {
   const provider = new GoogleAuthProvider();
   signInWithPopup(authentication, provider)
      .then((response) => {
         localStorage.setItem(
            'user',
            JSON.stringify(response.user)
         );
         toast.success('Login Successful');
      })
      .catch((err) => {
         if (err.code === 'auth/popup-closed-by-user') {
            toast.error('You have to login first');
         } else {
            toast.error(err.message);
         }
      });
}

export function signInWithFacebook() {
   // FIXME: this is not working
   const provider = new FacebookAuthProvider();
   signInWithPopup(authentication, provider)
      .then((response) => {
         localStorage.setItem(
            'user',
            JSON.stringify(response.user)
         );
         toast.success('Login Successful');
      })
      .catch((err) => {
         if (err.code === 'auth/popup-closed-by-user') {
            toast.error('You have to login first');
         } else {
            toast.error(err.message);
         }
      });
}

export async function register(username, email, password) {
   try {
      !username && toast.error('Provide a username');

      const res = await createUserWithEmailAndPassword(
         authentication,
         email,
         password
      );

      await updateProfile(res.user, { displayName: username });

      // Saves the user's profile into local storage
      localStorage.setItem('user', JSON.stringify(res.user));

      toast.success('Registration Successful');
      return res.user;
   } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
         toast.error('Email already in use');
      } else if (err.code === 'auth/invalid-email') {
         toast.error('Provide a valid email');
      } else if (err.code === 'auth/missing-email') {
         toast.error('Provide an email');
      } else if (err.code === 'auth/weak-password') {
         toast.error('Password should be at least 6 characters');
      } else if (err.code === 'auth/internal-error') {
         toast.error('Missing Password');
      } else {
         toast.error(err.message);
      }
   }
}

export async function signout() {
   try {
      await signOut(authentication);
      toast.success('Logout Successful');
      return true;
   } catch (err) {
      toast.error(err.message);
   }
}

export async function forgotPassword(email) {
   try {
      await sendPasswordResetEmail(authentication, email, {
         // TODO: change to live url
         url: `http://localhost:3005/login`,
      });
      toast.success('Password reset email sent');
      return true;
   } catch (err) {
      if (err.code === 'auth/user-not-found') {
         toast.error('Email not found');
      } else if (err.code === 'auth/invalid-email') {
         toast.error('Invalid Email');
      } else if (err.code === 'auth/missing-email') {
         toast.error('Provide an email');
      } else {
         toast.error(err.message);
      }
   }
}

function resetPassword(oobCode, newPassword) {
   return confirmPasswordReset(authentication, oobCode, newPassword);
}
