import { Box, BoxProps } from '@mui/material';
import styled from 'styled-components';

export const AuthLoginContainer = styled(Box)<BoxProps>`
  .content_theme {
    display: flex;
    justify-content: right;
  }
  .content_form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    height: calc(100vh - 200px);

    h1 {
      margin-bottom: 15px;
    }
  }
`;
