import Head from "next/head";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Signup from "../components/page_components/Signup.jsx";

const SignupPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        push("/");
      }
    });
  }, [push]);
  return (
    <>
      <Head>
        <title>Sign up | Scree Dashboard</title>
      </Head>

      <Signup />
    </>
  );
};

export default SignupPage;
