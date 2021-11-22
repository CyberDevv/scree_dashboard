import tw from 'twin.macro';

import IconButton from './IconButton';
import CheckedSVG from '../public/svg/checked.svg';
import UnCheckedSVG from '../public/svg/unchecked.svg';

const TasksComponent = ({ tasks, setTasks }) => {
   const handleclick = (id) => () => {
      const newTasks = [...tasks];

      const filteredTasks = newTasks.filter((item) => item.id === id)[0];

      filteredTasks.completed = !filteredTasks.completed;

      setTasks(newTasks);
   };

   return (
      <>
         {tasks.map((Eachtask, index) => {
            const { completed, task } = Eachtask;
            return (
               <EachTaskWrapper key={index}>
                  {completed ? (
                     <IconButton onClick={handleclick(index)}>
                        <CheckedSVG />
                     </IconButton>
                  ) : (
                     <IconButton onClick={handleclick(index)}>
                        <UnCheckedSVG />
                     </IconButton>
                  )}
                  <P className='small'>{task}</P>
               </EachTaskWrapper>
            );
         })}
      </>
   );
};

// Tailwind Styles
const EachTaskWrapper = tw.div`flex space-x-4 mb-4 items-center`;
const P = tw.p`text-textBg-darkest`;

export default TasksComponent;
