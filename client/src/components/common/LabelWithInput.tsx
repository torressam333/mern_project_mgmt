import { type ComponentPropsWithoutRef } from 'react';

type LabelWithInputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

const LabelWithInput = ({ id, label, ...props }: LabelWithInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default LabelWithInput;
