import { TextField, TextFieldProps } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)<TextFieldProps>`
  border-radius: 5px;

  & label.Mui-focused {
    color: ${(props) => props.theme.colors.text};
  }
  & label {
    color: ${(props) => props.theme.colors.text};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${(props) => props.theme.colors.primary};
  }
  & .MuiOutlinedInput-root {
    color: ${(props) => props.theme.colors.text};

    & fieldset {
      border-color: ${(props) => props.theme.colors.primary};
    }
    &:hover fieldset {
      border-color: ${(props) => props.theme.colors.primary};
    }
    &.Mui-focused fieldset {
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default StyledTextField;
