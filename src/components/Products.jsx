import tw from 'twin.macro';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';

import IconButton from './IconButton';
import HamburgerSVG from '../../public/svg/hamburger.svg';
import ChedckedSVG from '../../public/svg/plainChecked.svg';
import { collection, query } from 'firebase/firestore';
import { database } from '../firebase/index';
import { useDispatch } from 'react-redux';
import { useCollection } from 'react-firebase-hooks/firestore';
import { load } from '../features/productsSlice';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';

const Products = () => {
   const dispatch = useDispatch();

   // fetches the products from firestore database
   const [products, productsLoading, productsError] = useCollection(
      query(collection(database, 'products'))
   );

   // dispatches the products from firestore to redux store
   useEffect(() => {
      if (!productsLoading && products) {
         products.docs.map((doc) => {
            dispatch(load(doc.data()));
         });
      }
   }, [dispatch, products, productsLoading]);

   // selects product list from redux store
   const fromReduxProducts = useSelector((state) => state.products);

   return (
      <>
         <Nav>
            <IconButton>
               <ChedckedSVG />
            </IconButton>
            <Ul>
               <Li>
                  <p className='small'>No.</p>
               </Li>
               <Li></Li>
               <Li>
                  <p className='small'>Name</p>
               </Li>
               <Li>
                  <p className='small'>Type</p>
               </Li>
               <Li>
                  <p className='small'>Price</p>
               </Li>
               <Li></Li>
            </Ul>
         </Nav>

         <div>
            {productsLoading && (
               <div css={[tw`w-full flex justify-center mt-8`]}>
                  <CircularProgress />
               </div>
            )}
            {fromReduxProducts.map(({ id, name, price, type, image }) => {
               return (
                  <Product key={id}>
                     <IconButton>
                        <ChedckedSVG />
                     </IconButton>
                     <Ul>
                        <SubLi>
                           <p className='small'>{id}</p>
                        </SubLi>
                        <SubLi>
                           <ImageWrapper>
                              <Image
                                 src={image}
                                 layout='fill'
                                 className='productImage'
                                 alt={name}
                              />
                           </ImageWrapper>
                        </SubLi>
                        <SubLi>
                           <p className='small'>{name}</p>
                        </SubLi>
                        <SubLi>
                           <p className='small'>{type}</p>
                        </SubLi>
                        <SubLi>
                           <p className='small'>
                              <Currency quantity={price} currency='NGN' />
                           </p>
                        </SubLi>
                        <SubLi>
                           <IconButton>
                              <HamburgerSVG />
                           </IconButton>
                        </SubLi>
                     </Ul>
                  </Product>
               );
            })}
         </div>
      </>
   );
};

// Tailwind Styles
const MainWrapper = tw.div``;
const Nav = tw.div`bg-primary-sky flex items-center space-x-4 p-4 mt-6`;
const Ul = tw.div`grid grid-template-columns[0.2fr 0.5fr 2.2fr 1.2fr 1.2fr 0.2fr] gap-2  w-full items-center`;
const Li = tw.div`text-textBg-light`;
const SubLi = tw.div`text-textBg-darkest`;
const Product = tw.div`flex items-center space-x-4 p-4`;
const ImageWrapper = tw.div`rounded-full w-[44px] h-[44px] relative`;

export default Products;
