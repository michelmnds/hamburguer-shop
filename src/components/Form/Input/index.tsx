import { forwardRef, InputHTMLAttributes } from 'react';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  message: undefined | string;
  type: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, message, type, ...rest }, ref) => (
    <fieldset>
      <StyledTextField ref={ref} label={label} type={type} {...rest} />
      <StyledParagraph fontColor='red'>{message}</StyledParagraph>
    </fieldset>
  )
);

export default Input;
