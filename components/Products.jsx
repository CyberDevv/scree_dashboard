import tw from 'twin.macro';
import Image from 'next/image';

import IconButton from './IconButton';
import HamburgerSVG from '../public/svg/hamburger.svg';
import ChedckedSVG from '../public/svg/plainChecked.svg';

const Products = ({ products }) => {
   console.log(products);
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
            {products.map(({ id, name, price, type, image }) => {
               return (
                  <Product>
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
                           <p className='small'>₦{price}</p>
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
