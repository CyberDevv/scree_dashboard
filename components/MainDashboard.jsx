import tw from 'twin.macro';
import Image from 'next/image';
import { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {
   buildStyles,
   CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

import Task from './Task.jsx';
import NavBar from './NavBar.jsx';
import UnCheckedSVG from '../public/svg/unchecked.svg';
import ProgressProvider from '../utils/ProgressProvider.js';
import ExternalLinkSVG from '../public/svg/toexternallink.svg';

const MainDashboard = () => {
   const [addTask, setAddTask] = useState(false);
   const [tasks, setTasks] = useState([
      {
         id: 0,
         completed: true,
         task: 'Create my first website',
      },
      {
         id: 1,
         completed: false,
         task: 'Finish building my first website',
      },
      {
         id: 2,
         completed: false,
         task: 'Have a date tonight (-_-)',
      },
   ]);

   const handleAddTask = () => {
      setAddTask(!addTask);
      // const newTasks = [...tasks]
   };

   return (
      <MainWrapper>
         <NavBar />

         <Section>
            {/* Main view */}
            <Main>
               <DeviceDownload>
                  <div>
                     <HeaderText>Manage Your sites on the Go!!!</HeaderText>
                     <Text className='small'>
                        Download the Scree mobile application and manage your
                        business anywhere and anytime.
                     </Text>
                     <Download>
                        <Anchor>
                           <Image
                              src='/images/Google Play Badge.png'
                              width='135px'
                              height='40px'
                           />
                        </Anchor>
                        <Anchor>
                           <Image
                              src='/images/App Store Badge.png'
                              width='135px'
                              height='40px'
                           />
                        </Anchor>
                     </Download>
                  </div>
                  <ImageWrapper>
                     <Image
                        src='/images/devicedownload.png'
                        width='300px'
                        height='300px'
                     />
                  </ImageWrapper>
               </DeviceDownload>
            </Main>

            {/* Aside */}
            <Aside>
               {/* Site view */}
               <SiteView>
                  <Overview1>
                     <Overview1InnerWrapper>
                        {/* Progressbar */}
                        <ProgressBar>
                           <ProgressProvider valueStart={0} valueEnd={50}>
                              {(value) => (
                                 <CircularProgressbarWithChildren
                                    value={value}
                                    // text='5 steps more'
                                    styles={buildStyles({
                                       rotation: 0.75,
                                       strokeLinecap: 'round',
                                       textSize: '16px',
                                       pathTransitionDuration: 0.8,
                                       pathColor: `#FA5020`,
                                       textColor: '#121212',
                                       trailColor: '#FEEBE6',
                                    })}
                                 >
                                    <ProgressText>5 steps more</ProgressText>
                                 </CircularProgressbarWithChildren>
                              )}
                           </ProgressProvider>
                           {/* <Progress>
                              <span>5 steps more</span>
                           </Progress> */}
                        </ProgressBar>

                        {/* texts */}
                        <OverviewTextLinkWrapper>
                           <OverviewTextLink className='small'>
                              Magic in Little things
                           </OverviewTextLink>
                           <ExternalAnchor
                              className='small'
                              href='https://milt.scree.com'
                              target='_blank'
                           >
                              www.milt.scree.com
                              <SVG>
                                 <ExternalLinkSVG />
                              </SVG>
                           </ExternalAnchor>
                        </OverviewTextLinkWrapper>
                     </Overview1InnerWrapper>

                     {/* Button view site */}
                     <ViewSite className='smallBold'>view Site</ViewSite>
                  </Overview1>

                  <Overview2>
                     <SiteStatus className='small'>
                        Site Status: Published
                     </SiteStatus>
                  </Overview2>
               </SiteView>

               {/* Tasks */}
               <TaskWrapper>
                  <TasksNav>
                     <p className='smallBold'>Tasks</p>
                     <AddTask className='small' onClick={handleAddTask}>
                        Add new
                     </AddTask>
                  </TasksNav>

                  <Tasks>
                     <Task setTasks={setTasks} tasks={tasks} />

                     {addTask && (
                        <EachTaskWrapper>
                           <UnCheckedSVG />
                           <InputAddTask
                              type='text'
                              placeholder='Add your task'
                           />
                        </EachTaskWrapper>
                     )}
                  </Tasks>
               </TaskWrapper>
            </Aside>
         </Section>
      </MainWrapper>
   );
};

// Tailwind Styles
const MainWrapper = tw.div`w-full`;
const Section = tw.div`grid grid-cols-[1.5fr 1fr] my-4 gap-x-8`;
const Main = tw.main`column-span[1.5fr] space-y-8`;
const Aside = tw.aside`space-y-8`;
const DeviceDownload = tw.div`bg-primary-darkest space-x-24 text-white flex justify-between w-full items-center px-10 py-4 rounded-2xl`;
const HeaderText = tw.h6``;
const Text = tw.p`mt-4 mb-6`;
const ImageWrapper = tw.div``;
const Anchor = tw.a`cursor-pointer`;
const Download = tw.div`space-x-4`;
const SiteView = tw.div`bg-white rounded-2xl px-10 py-4 divide-y divide-textBg-lightest max-h-[218px]`;
const Overview1 = tw.div`flex justify-between items-center mb-6`;
const Overview1InnerWrapper = tw.div`flex items-center space-x-6`;
const Overview2 = tw.div`py-8 flex items-center h-full`;
const ProgressBar = tw.div`w-20 h-20`;
const ProgressText = tw.p`text-center text-xs leading-[14.52px] px-4`;
const OverviewTextLinkWrapper = tw.div``;
const OverviewTextLink = tw.p``;
const ExternalAnchor = tw.a`text-textBg-lightest flex items-center`;
const SVG = tw.i`ml-2`;
const ViewSite = tw.button`bg-secondary-darkest transition duration-300 text-white rounded-full px-4 py-2 hover:ring hover:ring-offset-2 hover:ring-secondary-darkest`;
const SiteStatus = tw.p`text-textBg-light`;
const TaskWrapper = tw.div`bg-white rounded-2xl px-5 py-4`;
const TasksNav = tw.div`flex items-center justify-between`;
const AddTask = tw.button`text-primary-light hover:text-primary-dark transition-colors duration-300`;
const Tasks = tw.div`mt-5`;
const InputAddTask = tw.input`border-2 border-textBg-lightest rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-textBg-light text-textBg-light`;
const EachTaskWrapper = tw.div`flex space-x-4 mb-4 items-center`;

export default MainDashboard;
