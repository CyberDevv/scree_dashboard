import tw from 'twin.macro';
import { useState } from 'react';
import { Button as AddSection } from '@mui/material';

import AddSectionSVG from '../../../public/svg/addSection.svg';

const SideBar = () => {
   const [active, setActive] = useState('Hero');
   return (
      <Nav>
         <SectionText>Sections</SectionText>

         <NavButtonsWrapper>
            {buttons.map((button, index) => (
               <Button
                  css={[active === button && tw`bg-[#fafafa] text-textBg-dark`]}
                  key={index}
               >
                  {button}
               </Button>
            ))}
         </NavButtonsWrapper>
         <AddSection
            startIcon={<AddSectionSVG />}
            variant='text'
            fullWidth
            sx={{
               textTransform: 'capitalize',
               color: '#525252',
               fontSize: '16px',
            }}
         >
            Add Section
         </AddSection>
      </Nav>
   );
};

const buttons = [
   'Hero',
   'CTA',
   'Arrivals',
   'Features',
   'Testimonials',
   'Footer',
];

// Tailwind styles
const Nav = tw.nav`min-w-[180px] w-[180px] bg-white text-center xl:(py-12)`;
const SectionText = tw.h5``;
const NavButtonsWrapper = tw.div`my-16 space-y-5`;
const Button = tw.button`block text-center w-full py-3.5 text-textBg-light xl:(text-[20px] font-semibold)`;

export default SideBar;
