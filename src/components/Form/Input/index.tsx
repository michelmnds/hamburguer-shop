import { TextFieldProps } from '@mui/material';
import { forwardRef } from 'react';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps {
  // label: string;
  message: undefined | string;
  // type: string;
  textFieldInputProps: TextFieldProps;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ message, textFieldInputProps }, ref) => (
    <fieldset>
      <StyledTextField ref={ref} {...textFieldInputProps} />
      <StyledParagraph fontColor='red'>{message}</StyledParagraph>
    </fieldset>
  )
);

export default Input;
