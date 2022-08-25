import { Button, ButtonProps } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(Button)<ButtonProps>`
  &.MuiButton-root {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      opacity: 0.8;
    }
  }
`;

export default StyledButton;
