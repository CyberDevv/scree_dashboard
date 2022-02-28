import tw from 'twin.macro';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { Chip, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import Currency from 'react-currency-formatter';
import { useSelector, useDispatch } from 'react-redux';

import IconButton from './IconButton';
import { load } from '../features/productsSlice';
import HamburgerSVG from '../../public/svg/hamburger.svg';
import ChedckedSVG from '../../public/svg/plainChecked.svg';
import { getProducts } from '../firebase/products.firebase.js';

const Products = ({ sliceNum }) => {
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();

   const user = useSelector((state) => state.user.user.uid);

   // dispatches the products from firestore to redux store
   useEffect(() => {
      setLoading(true);
      try {
         if (user) {
            getProducts(user).then((products) => {
               dispatch(load(products));
            });
            setLoading(false);
         }
      } catch (error) {
         toast.error(error);
      }
   }, [dispatch, user]);

   // selects product list from redux store
   const products = useSelector((state) => state.products.products);

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
            {loading && (
               <Product>
                  <IconButton>
                     <ChedckedSVG />
                  </IconButton>
                  <Ul>
                     <SubLi>
                        <p className='small'>
                           <Skeleton variant='text' animation='wave' />
                        </p>
                     </SubLi>
                     <SubLi>
                        <ImageWrapper>
                           <Skeleton
                              variant='circular'
                              width={44}
                              height={44}
                              animation='wave'
                           />
                        </ImageWrapper>
                     </SubLi>
                     <SubLi>
                        <p className='small'>
                           <Skeleton variant='text' animation='wave' />
                        </p>
                     </SubLi>
                     <SubLi>
                        <p className='small'>
                           <Skeleton variant='text' animation='wave' />
                        </p>
                     </SubLi>
                     <SubLi>
                        <p className='small'>
                           <Skeleton variant='text' animation='wave' />
                        </p>
                     </SubLi>
                     <SubLi>
                        <IconButton>
                           <HamburgerSVG />
                        </IconButton>
                     </SubLi>
                  </Ul>
               </Product>
            )}

            {products.length === 0 && (
               <p css={[tw`text-center text-textBg-light`]}>
                  You have no products
               </p>
            )}

            {products
               ?.slice(sliceNum || 0)
               .map(({ id, productName, price, tags, image }, index) => {
                  return (
                     <div key={id}>
                        <Product>
                           <IconButton>
                              <ChedckedSVG />
                           </IconButton>
                           <Ul>
                              <SubLi>
                                 <p className='small'>{index + 1}</p>
                              </SubLi>
                              <SubLi>
                                 <ImageWrapper>
                                    <Image
                                       src={
                                          image ||
                                          'https://via.placeholder.com/44'
                                       }
                                       layout='fill'
                                       className='productImage'
                                       alt={productName}
                                    />
                                 </ImageWrapper>
                              </SubLi>
                              <SubLi>
                                 <p className='small'>{productName}</p>
                              </SubLi>
                              <SubLi>
                                 <div css={[tw`space-x-1`]}>
                                    {tags.slice(0, 2).map((tag) => (
                                       <Chip
                                          sx={{
                                             bgcolor: '#afc5f23f',
                                             color: '#062666',
                                          }}
                                          key={tag}
                                          label={tag}
                                       />
                                    ))}
                                    {tags.length > 2 && <span>...</span>}
                                 </div>
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
                     </div>
                  );
               })}
         </div>
      </>
   );
};

// Tailwind Styles
const Nav = tw.div`bg-primary-sky flex items-center space-x-4 p-4 mt-6`;
const Ul = tw.div`grid grid-template-columns[0.2fr 0.5fr 2.2fr 1.2fr 1.2fr 0.2fr] gap-2  w-full items-center`;
const Li = tw.div`text-textBg-light`;
const SubLi = tw.div`text-textBg-darkest`;
const Product = tw.div`flex items-center space-x-4 p-4`;
const ImageWrapper = tw.div`rounded-full w-[44px] h-[44px] relative`;

export default Products;
