import { Box, BoxProps } from '@mui/material';
import styled from 'styled-components';

type ContainerBoxProps = BoxProps & { open: boolean };

export const ContainerBox = styled(Box)<ContainerBoxProps>`
  width: ${(props) => (props.open ? '300px' : '100px')};
  height: 100vh;

  transition: all 0.3s ease-in;

  padding: 15px;

  .switcher_box {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.open ? 'space-between' : 'center')};

    margin-bottom: 15px;
  }

  .box_user_info {
    margin: 15px 0;
    text-align: center;

    .greetings_user {
      margin-bottom: 5px;

      color: ${(props) => props.theme.colors.text};
      text-transform: capitalize;
    }

    .name_user {
      font-size: 1.2rem;
      word-break: break-all;
      text-transform: capitalize;
      color: ${(props) => props.theme.colors.text};
    }
  }

  .box_items {
  }
`;
