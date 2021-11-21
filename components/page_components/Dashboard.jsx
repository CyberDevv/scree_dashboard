import tw from 'twin.macro';

import SideBar from '../SideBar.jsx';
import MainDashboard from '../MainDashboard.jsx';

const Dashboard = () => {
   return (
      <MainWrapper>
         <InnerWrapper>
            <SideBar />
            <MainDashboard />
         </InnerWrapper>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`p-7 h-screen min-h-screen`;
const InnerWrapper = tw.div`flex space-x-8 h-full`;

export default Dashboard;
