import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import {
   buildStyles,
   CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { FormControl, MenuItem, Select } from '@mui/material';

import Task from './Task.jsx';
import Graph from './Graph.jsx';
import Products from './Products.jsx';
import {
   addTask as addTaskToDb,
   getTasks,
} from '../firebase/tasks.firebase.js';
import UnCheckedSVG from '../../public/svg/unchecked.svg';
import ProgressProvider from '../utils/ProgressProvider.js';
import ExternalLinkSVG from '../../public/svg/toexternallink.svg';

const MainDashboard = () => {
   const user = useSelector((state) => state.user.user.uid);

   const [addTask, setAddTask] = useState(false);
   const [tasks, setTasks] = useState([]);
   const [period, setPeriod] = React.useState('');

   useEffect(() => {
      if (user) {
         getTasks(user).then((tasks) => {
            setTasks(tasks);
         });
      }
   }, [user]);

   const handleCollectionChange = (event) => {
      setPeriod(event.target.value);
   };

   // function to toggle the input for adding tasks
   const handleAddTask = () => {
      setAddTask(!addTask);
   };

   // Function to handle on enter key press on add task input
   const handleOnEnter = (e) => {
      if (e.key === 'Enter') {
         const newTask = e.target.value;
         const newTasks = [...tasks];

         newTasks.push({
            completed: false,
            task: newTask,
         });

         // saves the task to db
         addTaskToDb(user, newTask, false);

         // fetches the tasks from db
         getTasks(user).then((tasks) => {
            setTasks(tasks);
         });

         setTasks(newTasks);
         setAddTask(false);
      }
   };

   return (
      <>
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
                              alt='Google Play Badge'
                           />
                        </Anchor>
                        <Anchor>
                           <Image
                              src='/images/App Store Badge.png'
                              width='135px'
                              height='40px'
                              alt='App Store Badge'
                           />
                        </Anchor>
                     </Download>
                  </div>
                  <ImageWrapper>
                     <Image
                        src='/images/devicedownload.png'
                        width='300px'
                        height='300px'
                        alt='Device Download'
                        priority={true}
                     />
                  </ImageWrapper>
               </DeviceDownload>

               {/* Analytics */}
               <Wrapper>
                  <SectionNav>
                     <AnalyticsText>Analytics</AnalyticsText>
                     <FormControl sx={{ minWidth: 120 }}>
                        <Select
                           value={period}
                           onChange={handleCollectionChange}
                           displayEmpty
                           // inputProps={{ 'aria-label': 'Without label' }}
                           sx={{ borderRadius: 3 }}
                        >
                           <MenuItem sx={{ color: '#929292' }} value=''>
                              Days
                           </MenuItem>
                           {/* <MenuItem sx={{ color: '#929292' }} value={10}>
                              Days
                           </MenuItem> */}
                           <MenuItem sx={{ color: '#929292' }} value={20}>
                              Weeks
                           </MenuItem>
                           <MenuItem sx={{ color: '#929292' }} value={30}>
                              Months
                           </MenuItem>
                        </Select>
                     </FormControl>
                  </SectionNav>
                  <Graph />
               </Wrapper>

               {/* Products */}
               <ProductWrapper>
                  <ProductNav>
                     <p className='smallBold'>Products</p>
                     <Link href='/products' passHref>
                        <AddNew className='small'>View all</AddNew>
                     </Link>
                  </ProductNav>

                  <Products sliceNum={-5} />
               </ProductWrapper>
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
                     <ViewSite className='smallBold'>
                        <Link href='/site-customizer'>
                           <a>view Site</a>
                        </Link>
                     </ViewSite>
                  </Overview1>

                  <Overview2>
                     <SiteStatus className='small'>
                        Site Status: Published
                     </SiteStatus>
                  </Overview2>
               </SiteView>

               {/* Tasks */}
               <Wrapper>
                  <SectionNav>
                     <p className='smallBold'>Tasks</p>
                     <AddNew className='small' onClick={handleAddTask}>
                        Add new
                     </AddNew>
                  </SectionNav>

                  <Tasks>
                     {/* shows when the task list is empty */}
                     {tasks.length === 0 && (
                        <SiteStatus className='small'>
                           You have no tasks
                        </SiteStatus>
                     )}

                     {/* shows when task list is not empty i.e when there is at least a task */}
                     {tasks.length > 0 && (
                        <Task setTasks={setTasks} tasks={tasks} />
                     )}

                     {/* Input to add task */}
                     {addTask && (
                        <EachTaskWrapper>
                           <UnCheckedSVG />
                           <InputAddTask
                              type='text'
                              placeholder='Add your task'
                              onKeyDown={handleOnEnter}
                           />
                        </EachTaskWrapper>
                     )}
                  </Tasks>
               </Wrapper>
            </Aside>
         </Section>
      </>
   );
};

// Tailwind Styles
const Section = tw.div`grid grid-cols-[1.5fr 1fr] my-4 pb-16 gap-x-8`;
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
const AddNew = tw.a`cursor-pointer text-primary-light hover:text-primary-dark transition-colors duration-300`;
const Tasks = tw.div`mt-5`;
const InputAddTask = tw.input`border-2 border-textBg-lightest rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-textBg-light text-textBg-light`;
const EachTaskWrapper = tw.div`flex space-x-4 mb-4 items-center`;
const Wrapper = tw.div`bg-white rounded-2xl px-5 py-4`;
const SectionNav = tw.div`flex items-center justify-between`;
const SelectWrapper = tw.div`relative`;
const AnalyticsText = tw.p`font-normal text-xl`;
const ProductWrapper = tw(Wrapper)`px-0`;
const ProductNav = tw(SectionNav)`px-4`;

export default MainDashboard;
