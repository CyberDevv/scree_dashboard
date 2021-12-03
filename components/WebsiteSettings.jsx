import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';

import { Button } from './TailwindStyles';

const WebsiteSettings = ({
   setGeneralOpened,
   gneralOpened,
   setSettingsActive,
}) => {
   return (
      <MainWrapper>
         {/* Breadcrumb */}
         <BreadcrumbsWrapper separator='>>' aria-label='breadcrumb'>
            <BackButton
               onClick={() => {
                  setGeneralOpened('');
                  setSettingsActive('General');
               }}
            >
               <BAnchor className='body'>General Settings</BAnchor>
            </BackButton>
            ,
            <PresentPageText className='bodyBold'>
               Website Settings
            </PresentPageText>
            ,
         </BreadcrumbsWrapper>

         {/* Title */}
         <Title>Website Settings</Title>
         <Unpublished>
            <UnpublisedTexr>Site is Unpublished</UnpublisedTexr>
            <PublishButton>Publish now</PublishButton>
         </Unpublished>

         <div>
            <SubTitle>Site Name</SubTitle>
            <SubTitleDesc className='small'>
               Edit your site name to help customers recognize your site better
            </SubTitleDesc>

            <SubSubTitle>Site Name</SubSubTitle>
            <TextField
               sx={{ width: 450 }}
               label='Site Name'
               variant='outlined'
            />
         </div>

         <div>
            <SubTitle>Site URL</SubTitle>
            <SubTitleDesc className='small'>
               Get your own branded domain or edit your free scree domain
            </SubTitleDesc>

            <SubSubTitle>Site Domain</SubSubTitle>
            <SiteDomainWrapper>
               <DomainText>https://scree.com/</DomainText>
               <InputText type='text' placeholder='Site Name' />
            </SiteDomainWrapper>
            <ConnectText className='small'>Connect your own domain</ConnectText>
         </div>

         <div>
            <SubTitle>Favicon</SubTitle>
            <SubTitleDesc className='small'>
               A favicon is the small icon next to your site title. Get a custom
               favicon to help visitors recognize your brand
            </SubTitleDesc>

            <SubSubTitle>Site Favicon</SubSubTitle>
            <FiviconWrapper>
               <Image src='/favicon.ico' height='40px' width='40px' />
               <div>
                  <P className='small'>
                     Your favicon is currently the scree logo
                  </P>

                  <ConnectText>
                     Upgrade to a premium plan
                     <P className='small'>
                        {' '}
                        Your favicon is currently the scree logo
                     </P>
                  </ConnectText>
               </div>
            </FiviconWrapper>
         </div>

         <div>
            <SubTitle>General Image</SubTitle>
            <SubTitleDesc className='small'>
               This is the image that is shared on your social networks to help
               visitors recognize you
            </SubTitleDesc>

            <SubSubTitle></SubSubTitle>
            <FiviconWrapper>
               <Image
                  src='https://images.pexels.com/photos/10058566/pexels-photo-10058566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  height='200px'
                  width='300px'
                  objectFit='cover'
               />
               <div>
                  <UploadButton>Upload Image</UploadButton>
                  <UploadText className='small'>
                     These change will be live on website publising
                  </UploadText>
               </div>
            </FiviconWrapper>
         </div>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`pb-16`;
const Title = tw.h5`text-textBg-dark mt-6`;
const SubTitle = tw.h5`text-textBg-dark mt-16 font-weight[600 !important]`;
const SubSubTitle = tw.h6`text-textBg-dark mt-8 mb-4 font-weight[500 !important]`;
const SubTitleDesc = tw.p`mt-2 text-textBg-dark`;
const BreadcrumbsWrapper = tw(Breadcrumbs)``;
const BAnchor = tw.a`text-textBg-light cursor-pointer hover:underline`;
const PresentPageText = tw.p`text-textBg-dark`;
const BackButton = tw.button``;
const SiteDomainWrapper = tw.div`flex items-center space-x-px`;
const DomainText = tw.p`bg-[#D2D2D2] px-4 text-textBg-dark py-4 rounded-l-[10px]`;
const InputText = tw.input`bg-none px-4 py-4 rounded-r-[10px] border-2 border-[rgba(0, 0, 0, 0.23)] focus:outline-none focus:border-[rgba(0, 0, 0, 0.53)]`;
const ConnectText = tw.p`mt-2 text-secondary-darkest`;
const FiviconWrapper = tw.div`flex items-center space-x-8`;
const P = tw.p`inline text-textBg-dark`;
const UploadText = tw.p`text-textBg-dark mt-4`;
const UploadButton = tw(
   Button
)`px-8 border-2 rounded-full py-3 transition duration-300 border-primary-darkest text-primary-darkest`;
const Unpublished = tw.div`bg-white rounded-2xl px-4 py-4 flex items-center justify-between mt-4`;
const UnpublisedTexr = tw.p`text-textBg-light`;
const PublishButton = tw.button`text-secondary-darkest`;

export default WebsiteSettings;
