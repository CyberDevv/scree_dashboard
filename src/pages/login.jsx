import Head from "next/head";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Login from "../components/page_components/Login.jsx";

const LoginPage = () => {
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
        <title>Login | Scree Dashboard</title>
      </Head>

      <Login />
    </>
  );
};

export default LoginPage;
