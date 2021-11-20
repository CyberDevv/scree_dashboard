import Head from 'next/head';

import Signup from '../components/page_components/Signup.jsx';

const SignupPage = () => {
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
