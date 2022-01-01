import tw from 'twin.macro';

import Logo from '../../public/svg/logo.svg';

const TwoSectionsLayout = ({ children }) => {
   return (
      <MainWrapper>
         <LeftWrapper className='pattern'>
            <Logo />
            <Text>Create and manage your own website</Text>
         </LeftWrapper>
         <RightWrapper>{children}</RightWrapper>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`flex`;
const RightWrapper = tw.div`h-screen w-full lg:px-56 text-center flex flex-col items-center justify-center`;
const LeftWrapper = tw.div`bg-primary-darkest lg:px-[99px] py-12 h-screen lg:w-[600px] lg:min-w-[600px]`;
const Text = tw.h2`text-white mt-[45%]`;

export default TwoSectionsLayout;
