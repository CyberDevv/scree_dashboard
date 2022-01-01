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

import Show from '../../public/svg/show.svg';
import Hide from '../../public/svg/hide.svg';
import { Button } from '../components/TailwindStyles.jsx';
import BackShowHide from '../../public/svg/Arrow - Left Square.svg';

const SignUpMethodEmail = ({ setSignupClicked }) => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordShown, setPasswordShown] = useState(false);

   return (
      <div>
         <Back className='tiny' onClick={() => setSignupClicked(false)}>
            <BackShowHide />
         </Back>

         <Title>Sign up with email </Title>

         <Form>
            {/* Username */}
            <TextField
               label='Username'
               type='text'
               variant='outlined'
               onChange={(e) => setUsername(e.target.value)}
               value={username}
               fullWidth
               required
            />

            {/* Email */}
            <TextField
               label='Email Address'
               type='email'
               variant='outlined'
               value={email}
               fullWidth
               onChange={(e) => setEmail(e.target.value)}
               required
            />

            {/* password */}
            <FormControl fullWidth variant='outlined'>
               <InputLabel htmlFor='password'>Enter Sign in PIN</InputLabel>
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
                  label='Enter Sign in PIN'
               />
            </FormControl>
         </Form>

         <AgreementText className='small'>
            By signing up, you agree to the <Span>Terms</Span> and{' '}
            <Span>Conditions</Span> and <Span>Privacy Policy</Span>
         </AgreementText>

         <ButtonWrapper>
            <ButtonText className='smallBold'>Continue</ButtonText>
         </ButtonWrapper>

         <AlternateText>
            Already have an account?{' '}
            <Link href='/login' passHref>
               <Anchor>Login</Anchor>
            </Link>
            `
         </AlternateText>
      </div>
   );
};

// Tailwind Styles
const Back = tw.button`text-left mb-4 text-textBg-dark hover:text-secondary-darkest`;
const Title = tw.h3`text-primary-dark`;
const ButtonWrapper = tw(
   Button
)`cursor-pointer w-full rounded-full bg-primary-darkest py-3 px-10 flex items-center mt-10 duration-300 transition-all`;
const ButtonText = tw.p`text-white text-center w-full py-2.5`;
const Form = tw.form`mt-20 space-y-12`;
const AgreementText = tw.p`text-textBg-light text-left mt-14`;
const Span = tw.span`text-secondary-darkest`;
const AlternateText = tw.p`text-textBg-light mt-9 `;
const Anchor = tw.a`text-secondary-darkest font-semibold tracking-wider cursor-pointer`;

export default SignUpMethodEmail;
