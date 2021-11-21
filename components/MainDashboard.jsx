import tw from 'twin.macro';

import NavBar from './NavBar.jsx';

const MainDashboard = () => {
   return (
      <MainWrapper>
         <NavBar />
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`w-full`;

export default MainDashboard;
