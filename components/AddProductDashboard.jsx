import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Button } from './TailwindStyles';
import Collection from './Collection.jsx';
import PlusOutlinedSVG from '../public/svg/plusoutline.svg';
import SelectMediaPlaceholderSVG from '../public/svg/selectMediaPlaceholder.svg';

const AddProductDashboard = () => {
   const [productName, setProductName] = useState('Untitled Product');
   const [addCollection, setAddCollection] = useState(false);
   const [Collections, setCollections] = useState([
      {
         id: 0,
         checked: true,
         task: 'Sofa',
      },
      {
         id: 1,
         checked: false,
         task: 'All Products',
      },
   ]);
   return (
      <>
         {/* Breadcrumb */}
         <BreadcrumbsWrapper separator='>>' aria-label='breadcrumb'>
            <Link href='/products'>
               <BAnchor className='body'>Products</BAnchor>
            </Link>
            ,
            <PresentPageText className='bodyBold'>
               {productName}
            </PresentPageText>
            ,
         </BreadcrumbsWrapper>

         {/* Nav */}
         <NavWrapper>
            <NavText>{productName}</NavText>

            <NavButtonWrapper className='smallBold'>
               <NavButton1>Cancel</NavButton1>
               <NavButton2>Save</NavButton2>
            </NavButtonWrapper>
         </NavWrapper>

         {/* Main Section */}
         <Section>
            <Main>
               {/* Upload Media */}
               <Wrapper>
                  <UploadMediaText>Upload Media</UploadMediaText>

                  <Div>
                     <IconButton>
                        <label htmlFor='contained-button-file'>
                           <Input
                              accept='image/*, video/*'
                              id='contained-button-file'
                              multiple
                              type='file'
                           />
                           <SelectMediaPlaceholderSVG />
                        </label>
                     </IconButton>

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
                              placeholder='Add product name'
                           />
                        </Label>
                     </div>

                     <div>
                        <Label htmlFor='addTag'>
                           Add Tag
                           <TextField
                              type='text'
                              id='addTag'
                              placeholder='New Arrivals'
                           />
                        </Label>
                     </div>
                  </Form>
               </Wrapper>

               {/* Add to collection */}
               <Wrapper>
                  <p className='smallBold'>Add to Collection</p>

                  <Collectionss>
                     <Collection
                        setCollections={setCollections}
                        collections={Collections}
                     />

                     <EachCollectionWrapper>
                        <PlusOutlinedSVG />
                        <CreateCollectionText>
                           Create a new collection
                        </CreateCollectionText>
                        {/* <InputAddCollection
                           type='text'
                           placeholder='Add your task'
                           // onKeyDown={handleOnEnter}
                        /> */}
                     </EachCollectionWrapper>
                  </Collectionss>
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
const Section = tw.div`grid grid-cols-[1.5fr 1fr] my-4 gap-x-8`;
const Main = tw.main`column-span[1.5fr] space-y-8`;
const Aside = tw.aside`space-y-8`;
const Wrapper = tw.div`bg-white rounded-2xl px-5 py-7`;
const UploadMediaText = tw.h6`text-xl`;
const Div = tw.div`mt-8 grid grid-cols-3 gap-4 content-center items-center`;
const Input = tw.input`hidden`;
const ImageWrapper = tw.div`relative w-full max-w-[250px] h-[120px] rounded-2xl overflow-hidden`;
const Form = tw.form`mt-8 space-y-7`;
const Label = tw.label``;
const TextField = tw.input`block mt-5 border-2 border-textBg-lightest rounded-xl w-full px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-textBg-lightest`;
const Collectionss = tw.div`mt-7`;
const InputAddCollection = tw.input`border-2 border-textBg-lightest rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-textBg-light text-textBg-light`;
const EachCollectionWrapper = tw.div`flex space-x-4 mb-4 items-center`;
const CreateCollectionText = tw.p`text-secondary-darkest`;

export default AddProductDashboard;
