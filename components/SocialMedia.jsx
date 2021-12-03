import tw from 'twin.macro';

import Instagram from '../public/svg/instagram 1.svg';
import Facebook from '../public/svg/facebook.svg';
import Whatsapp from '../public/svg/whatsapp 1.svg';
import Twitter from '../public/svg/twitter 1.svg';
import { IconButton } from '@mui/material';

const SocialMedia = () => {
   return (
      <MainWrapper>
         <IconButton>
            <Whatsapp />
         </IconButton>

         <IconButton>
            <Instagram />
         </IconButton>

         <IconButton>
            <Twitter />
         </IconButton>

         <IconButton>
            <Facebook />
         </IconButton>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`flex justify-between items-center max-w-[350px] mt-4`;

export default SocialMedia;
