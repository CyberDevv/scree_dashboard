import tw from 'twin.macro';

import SideBar from '../SideBar.jsx';

const Dashboard = () => {
   return (
      <MainWrapper>
         <InnerWrapper>
            <SideBar />
            <span>Dashboard</span>
         </InnerWrapper>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`p-7 h-screen min-h-screen`;
const InnerWrapper = tw.div`flex space-x-4 h-full`;

export default Dashboard;
