import tw from 'twin.macro';

import IconButton from './IconButton';
import CheckedFillSVG from '../../public/svg/checkedfill.svg';
import CheckedOutlinedSVG from '../../public/svg/checkedoutlie.svg';

const CollectionComponent = ({ collections, setCollections }) => {
   const handleclick = (id) => () => {
      const newTasks = [...collections];

      const filteredTasks = newTasks.filter((item) => item.id === id)[0];

      filteredTasks.checked = !filteredTasks.checked;

      setCollections(newTasks);
   };

   return (
      <>
         {collections.map((Eachtask, index) => {
            const { checked, task } = Eachtask;
            return (
               <EachTaskWrapper key={index}>
                  {checked ? (
                     <IconButton onClick={handleclick(index)}>
                        <CheckedFillSVG />
                     </IconButton>
                  ) : (
                     <IconButton onClick={handleclick(index)}>
                        <CheckedOutlinedSVG />
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

export default CollectionComponent;
