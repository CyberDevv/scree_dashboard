import Head from "next/head";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Welcome from "../components/page_components/Welcome.jsx";

const WelcomePage = () => {
  const { push } = useRouter();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        push("/login");
      }
    });
  }, [push]);
  return (
    <>
      <Head>
        <title>Welcome | Scree Dashboard</title>
      </Head>

      <Welcome />
    </>
  );
};

export default WelcomePage;
