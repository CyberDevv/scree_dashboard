import Head from 'next/head';

import Login from '../components/page_components/Login.jsx';

const LoginPage = () => {
   return (
      <>
         <Head>
            <title>Sign up</title>
         </Head>

         <Login />
      </>
   );
};

export default LoginPage;
