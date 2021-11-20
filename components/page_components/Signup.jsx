import tw from 'twin.macro';
import { useState } from 'react';

import Logo from '../../public/svg/logo.svg';
import SignUpMethods from '../../components/SignupMethods.jsx';
import SignUpMethodEmail from '../../components/SignUpMethodEmail.jsx';

const Signup = () => {
   const [signupClicked, setSignupClicked] = useState(true);

   return (
      <MainWrapper>
         <LeftWrapper className='pattern'>
            <Logo />
            <Text>Create and manage your own website</Text>
         </LeftWrapper>
         <RightWrapper>
            {!signupClicked && (
               <SignUpMethods setSignupClicked={setSignupClicked} />
            )}
            {signupClicked && (
               <SignUpMethodEmail setSignupClicked={setSignupClicked} />
            )}
         </RightWrapper>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`flex`;
const LeftWrapper = tw.div`bg-primary-darkest lg:px-[99px] py-12 h-screen lg:w-[600px] lg:min-w-[600px]`;
const RightWrapper = tw.div`h-screen w-full lg:px-56 lg:py-28 text-center`;
const Text = tw.h2`text-white mt-[45%]`;

export default Signup;
