import tw from 'twin.macro';
import { List } from '@mui/material';

import SettingsSubLink from './SettingsSubLink.jsx';

const GeneralSettings = ({
   setGeneralOpened,
   gneralOpened,
   setSettingsActive,
}) => {
   return (
      <MainWrapper>
         <Title>General Settings</Title>
         <List>
            <SettingsSubLink
               onClick={() => {
                  setGeneralOpened('website');
                  setSettingsActive('General');
               }}
               primary='Website Settings'
               secondary='Edit your website Information'
            />
            <SettingsSubLink
               href=''
               primary='Account Settings'
               secondary='Edit your Account Information'
            />
            <SettingsSubLink
               href=''
               primary='Languate and Region'
               secondary='Edit your language and region Information'
            />
            <SettingsSubLink
               href=''
               primary='Roles and Permissions'
               secondary='Edit your roles and permissions settings'
            />
         </List>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`mt-4`;
const Title = tw.h5`text-textBg-dark`;

export default GeneralSettings;
