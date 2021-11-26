import tw from 'twin.macro';
import Link from 'next/link';

import { Button } from '../TailwindStyles';
import WelcomeIcon from '../../public/svg/welcome.svg';
import TwoSectionsLayout from '../../components/TwoSectionsLayout.jsx';

const SiteCategory = () => {
   return (
      <TwoSectionsLayout>
         <Title>What is your site about</Title>

         <Description>
            This is on pending ( because I don't think there is a need of this
            screen since the site is just to generate a single site)
         </Description>

         <ButtonWrapper>
            <Link href='/ufuuf'>
               <TempAnchor className='smallBold'>Start Creating</TempAnchor>
            </Link>
         </ButtonWrapper>
      </TwoSectionsLayout>
   );
};

// Tailwindcss Styles
const Title = tw.h3`text-primary-dark`;
const Description = tw.h6`text-textBg-dark`;
const ButtonWrapper = tw(
   Button
)`cursor-pointer w-full rounded-full bg-primary-darkest py-3 px-10 flex items-center duration-300 transition-all mt-20`;
const TempAnchor = tw.a`text-white text-center w-full py-2.5`;

export default SiteCategory;
