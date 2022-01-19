import tw from 'twin.macro';

import IconButton from './IconButton';
import CheckedSVG from '../../public/svg/checked.svg';
import { updateTask } from '../firebase/tasks.firebase';
import UnCheckedSVG from '../../public/svg/unchecked.svg';

const TasksComponent = ({ tasks, setTasks }) => {
   const handleclick = (id, task, completed) => () => {
      const newTasks = [...tasks];

      const filteredTasks = newTasks.filter((item) => item.id === id)[0];

      filteredTasks.completed = !filteredTasks.completed;

      setTasks(newTasks);

      updateTask(id, task, !completed);
   };

   return (
      <>
         {tasks.map((Eachtask) => {
            const { completed, task, id } = Eachtask;
            return (
               <EachTaskWrapper key={id}>
                  {completed ? (
                     <IconButton onClick={handleclick(id, task, completed)}>
                        <CheckedSVG />
                     </IconButton>
                  ) : (
                     <IconButton onClick={handleclick(id, task, completed)}>
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
