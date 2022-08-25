import { Divider, DividerProps } from '@mui/material';
import styled from 'styled-components';

export const StyledDivider = styled(Divider)<DividerProps>`
  background-color: ${(props) => props.theme.colors.labels};
`;
