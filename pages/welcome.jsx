import Head from 'next/head'

import Welcome from '../components/page_components/Welcome.jsx' 

const WelcomePage = () => {
   return <>
      <Head>
         <title>Welcome | Scree Dashboard</title>
   </Head>

      <Welcome />
   </>;
};

export default WelcomePage;
