import tw from 'twin.macro';
import { useState } from 'react';
import { IconButton } from '@mui/material';

import Settings from '../../public/svg/Settings.svg';
import WebsiteSettings from './WebsiteSettings.jsx';
import GeneralSettings from './GeneralSettings.jsx';

const SettingsDashboard = () => {
   const [settingsActive, setSettingsActive] = useState('General');
   const [generalOpened, setGeneralOpened] = useState('');

   return (
      <>
         <Title>Settings</Title>
         <Section>
            {/* Aside */}
            <Aside>
               <EachSettings
                  className={`${
                     settingsActive === 'General' && 'activeSettings'
                  } `}
                  label='General Settings'
                  onClick={() => {
                     setSettingsActive('General');
                     setGeneralOpened('');
                  }}
               />
               <EachSettings label='Communication Settings' />
               <EachSettings label='Ecommerce Settings' />
               <EachSettings label='Payment Settings' />
            </Aside>

            {/* Main view */}
            <Main>
               {settingsActive !== '' && (
                  <>
                     {settingsActive === 'General' && generalOpened === '' && (
                        <GeneralSettings
                           generalOpened={generalOpened}
                           setGeneralOpened={setGeneralOpened}
                           setSettingsActive={setSettingsActive}
                        />
                     )}
                     {settingsActive === 'Communication' && (
                        <div>My name is my Communication</div>
                     )}
                     {settingsActive === 'Ecommerce' && (
                        <div>My name is my Ecommerce</div>
                     )}
                     {settingsActive === 'Payment' && (
                        <div>My name is my Payment</div>
                     )}
                  </>
               )}
               {settingsActive === 'General' && generalOpened === 'website' && (
                  <WebsiteSettings
                     generalOpened={generalOpened}
                     setGeneralOpened={setGeneralOpened}
                     setSettingsActive={setSettingsActive}
                  />
               )}
            </Main>
         </Section>
      </>
   );
};

const EachSettings = ({ label, onClick, className }) => {
   return (
      <SettingWrapper className={className}>
         <CustomIconButton onClick={onClick}>
            <Settings />
            <SettingLabel className='body'>{label}</SettingLabel>
         </CustomIconButton>
      </SettingWrapper>
   );
};

// Tailwind Styles
const Title = tw.h2`font-weight[900 !important] text-textBg-darkest`;
const Section = tw.div`grid grid-cols-[1fr 1.5fr] my-4 gap-x-8 items-start`;
const Main = tw.main`space-y-8`;
const Aside = tw.aside`grid grid-cols-2 gap-6`;
const SettingWrapper = tw.div`bg-white rounded-2xl w-[220px] h-[190px] overflow-hidden`;
const SettingLabel = tw.p`text-center`;
const CustomIconButton = tw.h3(
   IconButton
)`w-full h-full px-5 py-12 flex flex-col items-center justify-center space-y-2 border-radius[0px !important]`;

export default SettingsDashboard;
