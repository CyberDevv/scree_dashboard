import Head from "next/head";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Settings from "../components/page_components/Settings.jsx";

export default function SettingsPage() {
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
        <title>Settings | Scree Dashboard</title>
      </Head>

      <Settings />
    </>
  );
}

// Tailwind styles
