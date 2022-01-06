import tw from 'twin.macro';
import { FormControl, IconButton, MenuItem, Select } from '@mui/material';

import { Button } from '../TailwindStyles';
import UndoSVG from '../../../public/svg/undo.svg';
import RedoSVG from '../../../public/svg/redo.svg';
import Search from '../../../public/svg/search.svg';
import PhoneSVG from '../../../public/svg/phone.svg';
import ToolsSVG from '../../../public/svg/tools.svg';
import DesktopSVG from '../../../public/svg/desktop.svg';

const NavBar = () => {
   return (
      <Nav>
         <PageSelect>
            <PageDisplayTitle class='body'>Page:</PageDisplayTitle>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
               <Select
                  defaultValue={0}
                  sx={{
                     width: 80,
                     fontSize: '20px',
                     '&::before': {
                        border: 0,
                     },
                  }}
                  label='Page'
               >
                  <MenuItem value={0}>Home</MenuItem>
                  {/* <MenuItem value={20}>Twenty</MenuItem> */}
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
               </Select>
            </FormControl>

            <div css={[tw`space-x-1`]}>
               <IconButton>
                  <DesktopSVG />
               </IconButton>

               <IconButton>
                  <PhoneSVG />
               </IconButton>
            </div>
         </PageSelect>

         {/* Tools section */}
         <ToolsWrapper>
            <IconButton>
               <ToolsSVG />{' '}
               <span className='small' css={[tw`ml-2`]}>
                  Tools
               </span>
            </IconButton>

            <div>
               <IconButton>
                  <UndoSVG />
               </IconButton>

               <IconButton>
                  <RedoSVG />
               </IconButton>
            </div>

            <SearchWrapper>
               <IconButton>
                  <Search />
               </IconButton>
               <Input type='text' placeholder='Search' />
            </SearchWrapper>
         </ToolsWrapper>

         {/* Buttons section */}
         <NavButtonWrapper className='smallBold'>
            <NavButton1>Preview</NavButton1>
            <NavButton2>Publish</NavButton2>
         </NavButtonWrapper>
      </Nav>
   );
};

// Tailwind styles
const Nav = tw.nav`bg-white flex items-center justify-between shadow-lg w-full xl:(px-20 py-[15px])`;
const PageSelect = tw.div`flex items-baseline`;
const PageDisplayTitle = tw.p`text-textBg-light`;
const ToolsWrapper = tw.div`space-x-10 flex items-center`;
const NavButtonWrapper = tw.div`space-x-8 flex items-center`;
const NavButton = tw(
   Button
)`px-2 py-2 rounded-full w-[169px] transition duration-300`;
const NavButton1 = tw(NavButton)`border-2`;
const NavButton2 = tw(
   NavButton
)`bg-primary-darkest text-white flex items-center justify-center space-x-4`;
const SearchWrapper = tw.div`py-1 bg-[#FAFAFA] px-4 rounded-full space-x-3.5 w-[160px]`;
const Input = tw.input`background[transparent] focus:outline-none text-textBg-dark w-3/5`;

export default NavBar;
