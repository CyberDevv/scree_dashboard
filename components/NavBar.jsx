import tw from 'twin.macro';
import Image from 'next/image';

import IconButton from './IconButton.jsx';
import Search from '../public/svg/search.svg';
import Dropdown from '../public/svg/dropdown.svg';
import Notification from '../public/svg/NavNotification.svg';

const NavBar = () => {
   return (
      <MainWrapper>
         <SearchWrapper>
            <IconButton>
               <Search />
            </IconButton>
            <Input type='text' placeholder='Search' />
         </SearchWrapper>

         <OtherSection>
            <IconButton>
               <Notification />
            </IconButton>

            <UserWrapper>
               <UserImage>
                  <Image src='/images/user.png' layout='fill' />
               </UserImage>
               <UserName>
                  <Span className='body'>Remi Bankole</Span>
                  <IconButton>
                     <Dropdown />
                  </IconButton>
               </UserName>
            </UserWrapper>
         </OtherSection>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`flex justify-between items-center w-full`;
const SearchWrapper = tw.div`py-3.5 bg-white px-4 rounded-full space-x-3.5 w-[350px]`;
const Input = tw.input`focus:outline-none text-textBg-dark`;
const OtherSection = tw.div`flex justify-center items-center space-x-8`;
const UserWrapper = tw.div`flex justify-center items-center space-x-5`;
const UserImage = tw.div`relative h-12 w-12 border-[3px] rounded-full border-[#E8E8E8]`;
const UserName = tw.div`space-x-3.5`;
const Span = tw.span``;

export default NavBar;
