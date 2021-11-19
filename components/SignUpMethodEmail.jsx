import tw from 'twin.macro';

const SignUpMethodEmail = () => {
   return (
      <div>
         <Title>Sign up with email </Title>

         <FacebookWrapper>
            <SignupTextFacebook className='smallBold'>
               Continue
            </SignupTextFacebook>
         </FacebookWrapper>
      </div>
   );
};

// Tailwind Styles
const Title = tw.h3`text-primary-dark`;
const FacebookWrapper = tw.button`cursor-pointer w-full rounded-full bg-[#254792] py-3 px-10 flex items-center`;
const SignupTextFacebook = tw.p`text-white text-center ml-14`;

export default SignUpMethodEmail;
