import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

import { Button } from './TailwindStyles';
import PlusSVG from '../../public/svg/plus.svg';

const CollectionsDashboard = () => {
   const [collections, setCollections] = useState([
      {
         id: 1,
         image: 'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'Sofa',
      },
      {
         id: 2,
         image: 'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'Collection 1',
      },
      {
         id: 3,
         image: 'https://images.pexels.com/photos/4048419/pexels-photo-4048419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'collection 2',
      },
      {
         id: 4,
         image: 'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'collection 3',
      },
      {
         id: 5,
         image: 'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'collection 3',
      },
      {
         id: 6,
         image: 'https://images.pexels.com/photos/4048419/pexels-photo-4048419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'collection 4',
      },
   ]);

   return (
      <>
         {/* Nav */}
         <NavWrapper>
            <NavText>
               Collection <NavSpan>12</NavSpan>
            </NavText>

            <NavButtonWrapper className='smallBold'>
               <Link href='/collections/add-collection'>
                  <a>
                     <NavButton2>
                        <Span>Add Collection</Span> <PlusSVG />
                     </NavButton2>
                  </a>
               </Link>
            </NavButtonWrapper>
         </NavWrapper>

         {/* Product lists */}
         <CollectionWrapper>
            {collections.map(({ id, image, name }) => {
               return (
                  <div key={id}>
                     <ImageWrapper>
                        <Image src={image} layout='fill' objectFit='cover' alt= {name} />
                     </ImageWrapper>
                     <CollectionName className='smallBold'>
                        {name}
                     </CollectionName>
                  </div>
               );
            })}
         </CollectionWrapper>
      </>
   );
};

// Tailwind Styles
const NavWrapper = tw.nav`w-full mt-6 flex justify-between items-center`;
const NavText = tw.h5`inline`;
const NavSpan = tw.span`text-textBg-light`;
const NavButtonWrapper = tw.div`space-x-8 flex items-center`;
const NavButton = tw(
   Button
)`px-2 py-4 rounded-full w-[169px] transition duration-300`;
const NavButton2 = tw(
   NavButton
)`bg-primary-darkest text-white flex items-center justify-center space-x-4`;
const Span = tw.span``;
const CollectionWrapper = tw.div`grid grid-cols-3 gap-8 mt-8`;
const ImageWrapper = tw.div`h-[250px] w-[400px] relative rounded-2xl overflow-hidden`;
const CollectionName = tw.p`text-textBg-light mt-4`;

export default CollectionsDashboard;
