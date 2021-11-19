import tw from 'twin.macro'

import Google from '../public/svg/flat-color-icons_google.svg';
import Facebook from '../public/svg/ei_sc-facebook.svg';

const SignupMethods = ({setSignupClicked}) => {

  const handleSignupEmail = () => {
     setSignupClicked(true);
  };
  
  return (
     <div>
        <Title>Welcome! Let's get you started</Title>
        <Description>Create a scree account to continue</Description>

        <SignupWrapper>
           <GoogleWrapper>
              <Google />
              <SignupText className='smallBold'>Sign in with Google</SignupText>
           </GoogleWrapper>

           <FacebookWrapper>
              <Facebook />
              <SignupTextFacebook className='smallBold'>
                 Sign in with Facebook
              </SignupTextFacebook>
           </FacebookWrapper>
        </SignupWrapper>

        <Divider>Or</Divider>

        <EmailWrapper onClick={handleSignupEmail}>
           <SignupTextEmail className='smallBold'>
              Sign up with email
           </SignupTextEmail>
        </EmailWrapper>
     </div>
  );
}

// Tailwind Styles
const Title = tw.h3`text-primary-dark`;
const Description = tw.h6`text-dark lg:mt-6`;
const SignupWrapper = tw.div`lg:my-20 space-y-10`;
const GoogleWrapper = tw.button`w-full border rounded-full border-black cursor-pointer border-opacity-30 py-3 px-10 flex items-center`;
const SignupText = tw.p`text-primary-darkest text-center ml-14 `;
const FacebookWrapper = tw.button`cursor-pointer w-full rounded-full bg-[#254792] py-3 px-10 flex items-center`;
const SignupTextFacebook = tw.p`text-white text-center ml-14`;
const Divider = tw.h6`text-dark`;
const EmailWrapper = tw.button`w-full border rounded-full border-black border-opacity-30 cursor-pointer mt-16 py-4 px-10 flex items-center`;
const SignupTextEmail = tw.p`text-primary-darkest text-center w-full `;

export default SignupMethods
