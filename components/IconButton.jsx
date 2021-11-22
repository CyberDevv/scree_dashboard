import tw from 'twin.macro';

const Dashboard = ({ onClick, children }) => {
   return <MainWrapper onClick= {onClick}>{children}</MainWrapper>;
};

// Tailwind Styles
const MainWrapper = tw.button``;

export default Dashboard;
