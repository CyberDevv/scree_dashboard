import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import Products from './Products.jsx';
import { Button } from './TailwindStyles';
import PlusSVG from '../public/svg/plus.svg';

const ProductsDashboard = () => {
   const [products, setProducts] = useState([
      {
         id: 1,
         image: 'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'Ipad Pro 2017 Model',
         type: 'piant pot',
         price: 10000,
      },
      {
         id: 2,
         image: 'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'Coach Tabby 26 for sale',
         type: 'piant curtain',
         price: 4500,
      },
      {
         id: 3,
         image: 'https://images.pexels.com/photos/4048419/pexels-photo-4048419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'Samsung S34',
         type: 'piant Shit',
         price: 50000,
      },
      {
         id: 4,
         image: 'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'Ipad Pro 2017 Model',
         type: 'piant pot',
         price: 10000,
      },
      {
         id: 5,
         image: 'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'Coach Tabby 26 for sale',
         type: 'piant curtain',
         price: 4500,
      },
      {
         id: 6,
         image: 'https://images.pexels.com/photos/4048419/pexels-photo-4048419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'Samsung S34',
         type: 'piant Shit',
         price: 50000,
      },
   ]);

   const [collection, setCollection] = React.useState('');
   const [filter, setFilter] = React.useState('');

   const handleCollectionChange = (event) => {
      setCollection(event.target.value);
   };

   const handleFilterChange = (event) => {
      setFilter(event.target.value);
   };

   return (
      <>
         {/* Nav */}
         <NavWrapper>
            <NavText>
               Product <NavSpan>12</NavSpan>
            </NavText>

            <NavButtonWrapper className='smallBold'>
               <NavButton1>Inventory</NavButton1>
               <Link href='/products/add-product'>
                  <a>
                     <NavButton2>
                        <Span>Add Product</Span> <PlusSVG />
                     </NavButton2>
                  </a>
               </Link>
            </NavButtonWrapper>
         </NavWrapper>

         {/* Filter */}
         <FilterWrapper>
            {/* Collections */}
            <FillterInnerWrapper>
               <FilterHeader className='small'>Collections:</FilterHeader>
               <FormControl sx={{ minWidth: 120 }}>
                  <Select
                     value={collection}
                     onChange={handleCollectionChange}
                     displayEmpty
                     // inputProps={{ 'aria-label': 'Without label' }}
                     sx={{ borderRadius: 9999 }}
                  >
                     <MenuItem value=''>All Products</MenuItem>
                     <MenuItem sx={{ color: '#929292' }} value={10}>
                        Collection 1
                     </MenuItem>
                     <MenuItem sx={{color: '#929292'}} value={20}>Collection 2</MenuItem>
                     <MenuItem sx={{color: '#929292'}} value={30}>Collection 3</MenuItem>
                  </Select>
               </FormControl>
            </FillterInnerWrapper>

            <FillterInnerWrapper>
               <FilterHeader className='small'>Filters:</FilterHeader>
               <FormControl sx={{ minWidth: 120 }}>
                  <Select
                     value={filter}
                     onChange={handleFilterChange}
                     displayEmpty
                     // inputProps={{ 'aria-label': 'Without label' }}
                     sx={{ borderRadius: 9999 }}
                  >
                     <MenuItem value=''>All Products</MenuItem>
                     <MenuItem sx={{color: '#929292'}} value={10}>In stock</MenuItem>
                     <MenuItem sx={{color: '#929292'}} value={20}>Digital</MenuItem>
                     <MenuItem sx={{color: '#929292'}} value={30}>Out of stock</MenuItem>
                  </Select>
               </FormControl>
            </FillterInnerWrapper>
         </FilterWrapper>

         {/* Product lists */}
         <Products products={products} />
      </>
   );
};

// Tailwind Styles
const NavWrapper = tw.nav`w-full mt-6 flex justify-between items-center`;
const NavText = tw.h5`inline`;
const NavSpan = tw(NavText)`text-textBg-light`;
const NavButtonWrapper = tw.div`space-x-8 flex items-center`;
const NavButton = tw(
   Button
)`px-2 py-4 rounded-full w-[169px] transition duration-300`;
const NavButton1 = tw(NavButton)`border-2`;
const NavButton2 = tw(
   NavButton
)`bg-primary-darkest text-white flex items-center justify-center space-x-4`;
const Span = tw.span``;
const FilterWrapper = tw.div`flex justify-end space-x-8 items-center my-12`;
const FillterInnerWrapper = tw.div`flex items-center space-x-4`;
const FilterHeader = tw.div``;

export default ProductsDashboard;
