import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';
import {
   TextField,
   FormControl,
   InputLabel,
   OutlinedInput,
   IconButton,
   InputAdornment,
} from '@mui/material';

import { Button } from '../TailwindStyles';
import Show from '../../../public/svg/show.svg';
import Hide from '../../../public/svg/hide.svg';
import TwoSectionsLayout from '../TwoSectionsLayout';

const Login = () => {
   const [usernameEmail, setUsernameEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordShown, setPasswordShown] = useState(false);

   return (
      <TwoSectionsLayout>
         <div css={[tw`max-w-sm`]}>
            <Title>Log in with email</Title>

            <Form>
               {/* Username */}
               <TextField
                  label='Email Address/Username'
                  type='text'
                  variant='outlined'
                  value={usernameEmail}
                  fullWidth
                  onChange={(e) => setUsernameEmail(e.target.value)}
                  required
               />

               {/* password */}
               <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='password'>Password</InputLabel>
                  <OutlinedInput
                     id='password'
                     type={passwordShown ? 'text' : 'password'}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     endAdornment={
                        <InputAdornment position='end'>
                           <IconButton
                              aria-label='toggle password visibility'
                              onClick={() => setPasswordShown(!passwordShown)}
                              edge='end'
                           >
                              {passwordShown ? <Hide /> : <Show />}
                           </IconButton>
                        </InputAdornment>
                     }
                     label='Password'
                  />
               </FormControl>
            </Form>

            <ForgotPassword>
               <Span>Forgot Password?</Span>
            </ForgotPassword>

            <ButtonWrapper>
               {/* <ButtonText className='smallBold'>Continue</ButtonText> */}
               <Link href='/welcome' passHref>
                  <TempAnchor className='smallBold'>Continue</TempAnchor>
               </Link>
            </ButtonWrapper>

            <AlternateText>
               Don&apos;t have an account?{' '}
               <Link href='/signup' passHref>
                  <Anchor>Sign Up</Anchor>
               </Link>
               `
            </AlternateText>
         </div>
      </TwoSectionsLayout>
   );
};

// Tailwind Styles
const Title = tw.h3`text-primary-dark`;
const ButtonWrapper = tw(
   Button
)`cursor-pointer w-full rounded-full bg-primary-darkest py-3 px-10 flex items-center mt-10 duration-300 transition-all mt-20`;
const TempAnchor = tw.a`text-white text-center w-full py-2.5`;
const Form = tw.form`mt-20 space-y-12 w-full`;
const ForgotPassword = tw.div`w-full text-left mt-9`;
const Span = tw.span`text-secondary-darkest`;
const AlternateText = tw.p`text-textBg-light mt-9 `;
const Anchor = tw.a`text-secondary-darkest font-semibold tracking-wider cursor-pointer`;

export default Login;
