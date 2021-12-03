import {
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Typography,
} from '@mui/material';

import Arrow from '../public/svg/arrow.svg';

const SettingsSubLink = ({ primary, secondary, onClick }) => {
   return (
      <ListItem disablePadding>
         <ListItemButton onClick={onClick}>
            <ListItemText
               primary={
                  <>
                     <Typography
                        sx={{ fontWeight: '600' }}
                        component='span'
                        variant='h6'
                        color='#525252'
                     >
                        {primary}
                     </Typography>
                  </>
               }
               secondary={
                  <>
                     <Typography
                        sx={{ fontSize: '14px' }}
                        component='span'
                        color='#929292'
                     >
                        {secondary}
                     </Typography>
                  </>
               }
            />
            <ListItemIcon>
               <Arrow />
            </ListItemIcon>
         </ListItemButton>
      </ListItem>
   );
};

export default SettingsSubLink;
