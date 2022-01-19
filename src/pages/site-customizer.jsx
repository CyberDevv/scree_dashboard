import Head from "next/head";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SiteCustomizer from "../components/page_components/SiteCustomizer.jsx";

const SiteCustomizerPage = () => {
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
        <title>Site Customizer | Scree Dashboard</title>
      </Head>

      <SiteCustomizer />
    </>
  );
};

export default SiteCustomizerPage;
