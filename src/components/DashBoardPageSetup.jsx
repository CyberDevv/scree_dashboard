import tw from "twin.macro";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

const DashBoardPageSetup = ({ children }) => {
  return (
    <MainWrapper>
      <InnerWrapper>
        <Relative>
          <SideBar />
        </Relative>
        <Wrapper>
          <NavBar />
          {children}
        </Wrapper>
      </InnerWrapper>
    </MainWrapper>
  );
};

// Tailwind Styles
const MainWrapper = tw.div`p-7 h-screen min-h-screen`;
const InnerWrapper = tw.div`flex space-x-8 h-full`;
const Relative = tw.div`relative w-[135px]`;
const Wrapper = tw.div`w-full`;

export default DashBoardPageSetup;
