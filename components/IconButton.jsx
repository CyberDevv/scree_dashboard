import tw from 'twin.macro';

const Dashboard = ({ children }) => {
   return <MainWrapper>{children}</MainWrapper>;
};

// Tailwind Styles
const MainWrapper = tw.button``;

export default Dashboard;
