import { Box, BoxProps } from '@mui/material';
import styled from 'styled-components';

export const LoginFormContainer = styled(Box)<BoxProps>`
  display: flex;
  justify-content: center;

  .content {
    width: 500px;

    .form_content {
      margin-bottom: 20px;
    }
  }
`;
