import tw from 'twin.macro';

const InputField = ({ label, type, onChange, value, children, placeholder }) => {
   return (
      <InputWrapper>
         <Input type={type} onChange={onChange} value={value} className= "small" placeholder= {placeholder} />
         <Label className='pretext' htmlFor='text'>
            {label}
         </Label>
         {children}
      </InputWrapper>
   );
};

// Tailwind Styles
const InputWrapper = tw.div`border-2 border-textBg-light rounded-xl relative flex items-center`;
const Input = tw.input`w-full h-full px-4 py-4 focus:outline-none text-textBg-dark`;
const Label = tw.label`absolute px-1 bg-white -top-2 left-4 text-dark`;

export default InputField;
