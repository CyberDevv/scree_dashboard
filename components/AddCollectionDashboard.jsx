import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Button } from './TailwindStyles';
import SocialMedia from './SocialMedia.jsx';

const AddCollectionDashboard = () => {
   const [collectionName, setCollectionName] = useState('Untitled Collection');

   return (
      <>
         {/* Breadcrumb */}
         <BreadcrumbsWrapper separator='>>' aria-label='breadcrumb'>
            <Link href='/collections'>
               <BAnchor className='body'>Collections</BAnchor>
            </Link>
            ,
            <PresentPageText className='bodyBold'>
               {collectionName}
            </PresentPageText>
            ,
         </BreadcrumbsWrapper>

         {/* Nav */}
         <NavWrapper>
            <NavText>{collectionName}</NavText>

            <NavButtonWrapper className='smallBold'>
               <NavButton1>Cancel</NavButton1>
               <NavButton2>Save</NavButton2>
            </NavButtonWrapper>
         </NavWrapper>

         {/* Main Section */}
         <Section>
            <Main>
               {/* Products in Collection */}
               <Wrapper>
                  <ProductsinCollectionText className='bodyBold'>
                     Products in Collection <Span>2</Span>
                  </ProductsinCollectionText>

                  <Div>
                     <ImageWrapper>
                        <Image
                           src='https://images.pexels.com/photos/9532175/pexels-photo-9532175.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                           layout='fill'
                           objectFit='cover'
                           alt='some pics'
                        />
                     </ImageWrapper>

                     <ImageWrapper>
                        <Image
                           src='https://images.pexels.com/photos/9532175/pexels-photo-9532175.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                           layout='fill'
                           objectFit='cover'
                           alt='some pics'
                        />
                     </ImageWrapper>
                  </Div>
               </Wrapper>
            </Main>

            {/* Aside */}
            <Aside>
               {/* Basic Info */}
               <Wrapper>
                  <p className='smallBold'>Basic Info</p>

                  <Form>
                     <div>
                        <Label htmlFor='addProduct'>
                           Name
                           <TextField
                              type='text'
                              id='addProduct'
                              placeholder='Add Collection name'
                           />
                        </Label>
                     </div>

                     <div>
                        <Label htmlFor='addTag'>
                           Collection Image
                           <CollectionImage>
                              <Image
                                 src='https://images.pexels.com/photos/9532175/pexels-photo-9532175.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                                 layout='fill'
                                 objectFit='cover'
                                 alt='some pics'
                              />
                           </CollectionImage>
                        </Label>
                     </div>
                  </Form>
               </Wrapper>

               {/* Share with friends */}
               <Wrapper>
                  <p className='bodyBold'>Share to your friends</p>
                  <SharDescription className='small'>
                     Share this to your social media accounts in just on click
                  </SharDescription>

                  <SocialMedia />
               </Wrapper>
            </Aside>
         </Section>
      </>
   );
};

// Tailwind Styles
const BAnchor = tw.a`text-textBg-light cursor-pointer hover:underline`;
const PresentPageText = tw.p`text-textBg-dark`;
const BreadcrumbsWrapper = tw(Breadcrumbs)`mt-8`;
const NavWrapper = tw.nav`w-full mt-6 flex justify-between items-center`;
const NavText = tw.h5`inline`;
const NavButtonWrapper = tw.div`space-x-8 flex items-center`;
const NavButton = tw(
   Button
)`px-2 py-4 rounded-full w-[169px] transition duration-300`;
const NavButton1 = tw(NavButton)`border-2`;
const NavButton2 = tw(
   NavButton
)`bg-primary-darkest text-white flex items-center justify-center space-x-4`;
const Section = tw.div`grid grid-cols-[1.5fr 1fr] my-4 gap-x-8 pb-20`;
const Main = tw.main`column-span[1.5fr] space-y-8`;
const Aside = tw.aside`space-y-8`;
const Wrapper = tw.div`bg-white rounded-2xl px-5 py-7`;
const ProductsinCollectionText = tw.p`text-xl`;
const Div = tw.div`mt-8 grid grid-cols-2 gap-4 content-center items-center`;
const ImageWrapper = tw.div`relative w-full max-w-[350px] h-[200px] rounded-2xl overflow-hidden`;
const Form = tw.form`mt-8 space-y-7`;
const Label = tw.label``;
const TextField = tw.input`block mt-5 border-2 border-textBg-lightest rounded-xl w-full max-w-[350px] px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-textBg-lightest`;
const CollectionImage = tw.div`w-[350px] h-[150px] relative rounded-2xl overflow-hidden mt-5`;
const SharDescription = tw.p`mt-2 text-textBg-light`;
const Span = tw.span`text-textBg-light`;

export default AddCollectionDashboard;
