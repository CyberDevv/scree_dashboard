import Head from 'next/head'

import Signup from '../components/page_components/Signup.jsx'

const signup = () => {
  return (
     <>
        <Head>
           <title>Sign up</title>
        </Head>

        <Signup />
     </>
  );
}

export default signup
