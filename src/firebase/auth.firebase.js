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
} from 'firebase/auth';

import { authentication } from './index';

export function login(email, password) {
   signInWithEmailAndPassword(authentication, email, password)
      .then((responese) => {
         const { user } = responese;
         localStorage.setItem(
            'user',
            JSON.stringify({
               displayName: user.displayName,
               email: user.email,
               uid: user.uid,
            })
         );
         console.log(user);
      })
      .catch((err) => {
         if (err.code === 'auth/user-not-found') {
            console.log('Email not found');
         } else if (err.code === 'auth/wrong-password') {
            console.log('Wrong password');
         } else {
            console.log(err.message);
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
            JSON.stringify({
               displayName: response.user.displayName,
               email: response.user.email,
               photoURL: response.user.photoURL,
               uid: response.user.uid,
            })
         );
      })
      .catch((err) => {
         console.log(err);
      });
}

export function signInWithFacebook() {
   // FIXME: this is not working
   const provider = new FacebookAuthProvider();
   signInWithPopup(authentication, provider)
      .then((response) => {
         localStorage.setItem(
            'user',
            JSON.stringify({
               displayName: response.user.displayName,
               email: response.user.email,
               photoURL: response.user.photoURL,
               uid: response.user.uid,
            })
         );
      })
      .catch((err) => {
         // TODO: display error message in a toast
         console.log(err);
      });
}

export function register(username, email, password) {
   createUserWithEmailAndPassword(authentication, email, password).catch(
      (err) => {
         if (err.code === 'auth/email-already-in-use') {
            console.log('Email already in use');
         } else {
            console.log(err.message);
         }
         console.log(err);
      }
   );

   onAuthStateChanged(authentication, (user) => {
      if (user) {
         user.displayName = username;
         // .then(console.log('Progile updated'));

         localStorage.setItem(
            'user',
            JSON.stringify({
               displayName: user.displayName,
               email: user.email,
               // photoURL: user.photoURL,
               uid: user.uid,
            })
         );
      }
   });
}

export function signout() {
   signOut(authentication);
}

function forgotPassword(email) {
   return sendPasswordResetEmail(authentication, email, {
      url: `http://localhost:3000/login`,
   });
}

function resetPassword(oobCode, newPassword) {
   return confirmPasswordReset(authentication, oobCode, newPassword);
}

// TODO: display error message in a toast
