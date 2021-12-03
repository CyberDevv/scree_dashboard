import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';
import {
   FormControl,
   InputLabel,
   OutlinedInput,
   IconButton,
   InputAdornment,
   Chip,
} from '@mui/material';

import { Button } from '../TailwindStyles';
import SearchSVG from '../../public/svg/search.svg';
import TwoSectionsLayout from '../../components/TwoSectionsLayout.jsx';

const SiteCategory = () => {
   const [search, setSearch] = useState('');
   return (
      <TwoSectionsLayout>
         <Title>What is your site about</Title>

         <Description className='small'>
            This will help us suggest ideas best best suited for your needs.
         </Description>

         {/* Search button */}
         <FormControl fullWidth variant='outlined'>
            <InputLabel htmlFor='FindCategory'>Find category</InputLabel>
            <OutlinedInput
               id='FindCategory'
               type='text'
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               endAdornment={
                  <InputAdornment position='end'>
                     <IconButton
                        aria-label='find category button'
                        // onClick={() => setSearch()}
                        edge='end'
                        sx={{ width: 40 }}
                     >
                        <SearchSVG />
                     </IconButton>
                  </InputAdornment>
               }
               label='Find category'
            />
         </FormControl>

         {/* Chips */}
         <CategoriesWrapper>
            {chips.map(({ name, link }, index) => (
               <Link href={`${link ? '/' : ''}`} key={index}>
                  <a css={[tw`mr-4 mb-4`]}>
                     <Chip
                        label={name}
                        variant={link ? 'filled' : 'outlined'}
                        clickable
                        disabled={link ? false : true}
                        sx={{
                           textTransform: 'capitalize',
                           paddingX: '20px',
                           paddingY: '18px',
                           borderRadius: '999px',
                           fontSize: '14px',
                           color: `${link ? '#fff' : '#929292'}`,
                           bgcolor: `${link && '#0E122F'}`,
                           '&:hover': {
                              bgcolor: '#25307E',
                           },
                        }}
                     />
                  </a>
               </Link>
            ))}
         </CategoriesWrapper>
      </TwoSectionsLayout>
   );
};

const chips = [
   { name: 'Potfolio' },
   { name: 'art' },
   { name: 'marketing' },
   { name: 'travel' },
   { name: 'education' },
   { name: 'blog' },
   { name: 'travel' },
   { name: 'marketing' },
   { name: 'fashion' },
   { name: 'beauty' },
   { name: 'design' },
   { name: 'education' },
   { name: 'online store', link: '/' },
   { name: 'fitness' },
   { name: 'food' },
   { name: 'fitness' },
];

// Tailwindcss Styles
const Title = tw.h4`text-primary-dark`;
const Description = tw.h6`text-textBg-dark xl:(mt-7 mb-9)`;
const ButtonWrapper = tw(
   Button
)`cursor-pointer w-full rounded-full bg-primary-darkest py-3 px-10 flex items-center duration-300 transition-all mt-20`;
const TempAnchor = tw.a`text-white text-center w-full py-2.5`;
const CategoriesWrapper = tw.div`my-16 flex flex-wrap justify-start w-[136%]`;

export default SiteCategory;
