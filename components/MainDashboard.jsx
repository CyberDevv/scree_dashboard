import tw from 'twin.macro';
import Image from 'next/image';

import NavBar from './NavBar.jsx';

const MainDashboard = () => {
   return (
      <MainWrapper>
         <NavBar />

         <Section>
            <Main>
               <DeviceDownload>
                  <div>
                     <HeaderText>Manage Your sites on the Go!!!</HeaderText>
                     <Text className='small'>
                        Download the Scree mobile application and manage your
                        business anywhere and anytime.
                     </Text>
                     <Download>
                        <Anchor>
                           <Image
                              src='/images/Google Play Badge.png'
                              width='135px'
                              height='40px'
                           />
                        </Anchor>
                        <Anchor>
                           <Image
                              src='/images/App Store Badge.png'
                              width='135px'
                              height='40px'
                           />
                        </Anchor>
                     </Download>
                  </div>
                  <ImageWrapper>
                     <Image
                        src='/images/devicedownload.png'
                        width='300px'
                        height='300px'
                     />
                  </ImageWrapper>
               </DeviceDownload>
            </Main>
            <Aside></Aside>
         </Section>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`w-full`;
const Section = tw.div`grid grid-cols-[1.5fr 1fr] gap-x-8`;
const Main = tw.main`column-span[1.5fr]`;
const Aside = tw.aside``;
const DeviceDownload = tw.div`bg-primary-darkest my-4 space-x-24 text-white flex justify-between w-full items-center px-10 py-4 rounded-2xl`;
const HeaderText = tw.h6``;
const Text = tw.p`mt-4 mb-6`;
const ImageWrapper = tw.div``;
const Anchor = tw.a`cursor-pointer`;
const Download = tw.div`space-x-4`;

export default MainDashboard;
