import tw from 'twin.macro';

import NavBar from '../SiteCustomizer/NavBar.jsx';
import SideBar from '../SiteCustomizer/SideBar.jsx';

const SiteCustomizer = () => {
   return (
      <>
         <NavBar />

         <Main>
            <SideBar />

            <Site></Site>
         </Main>
      </>
   );
};
// Tailwind styles
const Main = tw.div`flex space-x-8 mt-4`;
const Site = tw.div`bg-primary-sky w-full h-[120vh]`;

export default SiteCustomizer;
