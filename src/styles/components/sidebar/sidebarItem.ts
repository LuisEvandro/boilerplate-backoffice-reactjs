import { Box, BoxProps } from '@mui/material';
import styled from 'styled-components';

type ContainerBoxSidebarItemrops = BoxProps & { open: boolean; active: boolean };

export const ContainerBoxSidebarItem = styled(Box)<ContainerBoxSidebarItemrops>`
  cursor: pointer;
  margin-top: 25px;

  background-color: ${(props) =>
    props.active ? (props) => props.theme.colors.primary : 'transparent'};
  box-shadow: ${(props) =>
    props.active ? (props) => '0 2px 6px ' + props.theme.colors.primary : 'none'};
  padding: 10px 15px;
  border-radius: 15px;

  .content_item {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.open ? 'start' : 'center')};

    transition: all 0.6s ease-in;

    .item_icon {
      display: flex;
      align-items: center;
      margin-right: ${(props) => (props.open ? '10px' : '0')};
      color: ${(props) => (props.active ? 'white' : props.theme.colors.text)};

      .material-icons {
        font-size: ${(props) => (props.open ? '1.3rem' : '1.5rem')};
        color: ${(props) => (props.active ? 'white' : props.theme.colors.text)};
      }
    }

    .item_name {
      display: flex;
      align-items: center;
      color: ${(props) => (props.active ? 'white' : props.theme.colors.text)};
    }
  }
`;
