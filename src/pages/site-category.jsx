import Head from "next/head";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";

import SiteCategory from "../components/page_components/SiteCategory.jsx";

const SiteCategoryPage = () => {
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
        <title>Site Category | Scree Dashboard</title>
      </Head>

      <SiteCategory />
    </>
  );
};

export default SiteCategoryPage;
