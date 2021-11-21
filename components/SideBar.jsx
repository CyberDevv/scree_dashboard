import tw from 'twin.macro';
import Image from 'next/image';

import Logout from '../public/svg/Iconly.svg';
import Wallet from '../public/svg/wallet.svg';
import Profile from '../public/svg/Profile.svg';
import Settings from '../public/svg/Setting.svg';
import Document from '../public/svg/document.svg';
import Categorory from '../public/svg/Category.svg';
import Notification from '../public/svg/Notification.svg';

const Dashboard = () => {
   return (
      <MainWrapper>
         <div>
            {/* <Logo /> */}
            <Image src='/svg/logo.svg' width='86px' height='40' />

            <NavMenu>
               <NavItem className='active'>
                  <Categorory />
               </NavItem>

               {/*  */}
               <NavItem>
                  <Document />
               </NavItem>

               {/* Wallet */}
               <NavItem>
                  <Wallet />
               </NavItem>

               {/*  */}
               <NavItem>
                  <Document />
               </NavItem>

               {/* Notification */}
               <NavItem>
                  <Notification />
               </NavItem>

               {/* Profile */}
               <NavItem>
                  <Profile />
               </NavItem>

               {/* settings */}
               <NavItem>
                  <Settings />
               </NavItem>
            </NavMenu>
         </div>

         {/* Logout */}
         <LogoutWrapper>
            <Logout />
         </LogoutWrapper>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`bg-primary-darkest h-full text-white flex flex-col justify-between rounded-[32px] pl-5 py-14 w-[120px] overflow-x-hidden`;
const NavMenu = tw.ul`mt-8`;
const NavItem = tw.div`pl-6 py-[1.1rem] relative`;
const LogoutWrapper = tw(NavItem)``;

export default Dashboard;
