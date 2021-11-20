import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';

import Show from '../../public/svg/show.svg';
import Hide from '../../public/svg/hide.svg';
import TwoSectionsLayout from '../TwoSectionsLayout';
import InputField from '../../components/InputField.jsx';
import { Button } from '../../components/TailwindStyles.jsx';

const Login = () => {
   const [usernameEmail, setUsernameEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordShown, setPasswordShown] = useState(false);

   return (
      <TwoSectionsLayout>
         <Title>Log in with email</Title>

         <Form>
            {/* Username */}
            <InputField
               placeholder='Email Address/Username'
               type='text'
               value={usernameEmail}
               onChange={(e) => setUsernameEmail(e.target.value)}
            />

            {/* password */}
            <InputField
               type={passwordShown ? 'text' : 'password'}
               placeholder='Password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            >
               {passwordShown ? (
                  <ShowHide onClick={() => setPasswordShown(!passwordShown)}>
                     <Show />
                  </ShowHide>
               ) : (
                  <ShowHide onClick={() => setPasswordShown(!passwordShown)}>
                     <Hide />
                  </ShowHide>
               )}
            </InputField>
         </Form>

         <ForgotPassword>
            <Span>Forgot Password?</Span>
         </ForgotPassword>

         <ButtonWrapper>
            {/* <ButtonText className='smallBold'>Continue</ButtonText> */}
            <Link href='/welcome'>
               <TempAnchor className='smallBold'>Continue</TempAnchor>
            </Link>
         </ButtonWrapper>

         <AlternateText>
            Don't have an account?{' '}
            <Link href='/signup'>
               <Anchor>Sign Up</Anchor>
            </Link>
            `
         </AlternateText>
      </TwoSectionsLayout>
   );
};

// Tailwind Styles
const Title = tw.h3`text-primary-dark`;
const ButtonWrapper = tw(
   Button
)`cursor-pointer w-full rounded-full bg-primary-darkest py-3 px-10 flex items-center mt-10 duration-300 transition-all mt-20`;
// const ButtonText = tw.p`text-white text-center w-full py-2.5`;
const TempAnchor = tw.a`text-white text-center w-full py-2.5`;
const Form = tw.form`mt-20 space-y-12 w-full`;
const ShowHide = tw.button`px-2 text-left`;
const ForgotPassword = tw.div`w-full text-left mt-9`;
const Span = tw.span`text-secondary-darkest`;
const AlternateText = tw.p`text-textBg-light mt-9 `;
const Anchor = tw.a`text-secondary-darkest font-semibold tracking-wider cursor-pointer`;

export default Login;
