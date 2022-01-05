import tw from 'twin.macro';
import Link from 'next/link';

import { Button } from '../TailwindStyles';
import WelcomeIcon from '../../../public/svg/welcome.svg';
import TwoSectionsLayout from '../../components/TwoSectionsLayout.jsx';

const Welcome = () => {
   return (
      <TwoSectionsLayout>
         <WelcomeIcon />

         <Title>Welcome to Scree</Title>
         <Description>
            Start creating your very own customizable website
         </Description>

         {/* <StartButton>Start Creating</StartButton> */}
         <ButtonWrapper>
            {/* <ButtonText className='smallBold'>Continue</ButtonText> */}
            <Link href='/site-category' passHref>
               <TempAnchor className='smallBold'>Start Creating</TempAnchor>
            </Link>
         </ButtonWrapper>
      </TwoSectionsLayout>
   );
};

// Tailwindcss Styles
const Title = tw.h3`my-8`;
const Description = tw.h6`text-textBg-dark`;
const StartButton = tw(Button)`mt-8`;
const ButtonWrapper = tw(
   Button
)`cursor-pointer w-full rounded-full bg-primary-darkest py-3 px-10 flex items-center duration-300 transition-all mt-20`;
// const ButtonText = tw.p`text-white text-center w-full py-2.5`;
const TempAnchor = tw.a`text-white text-center w-full py-2.5`;

export default Welcome;
