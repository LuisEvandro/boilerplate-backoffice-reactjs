import { IconButton } from '@mui/material';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { StyledDivider } from '../../styles/components/styledDivider';
import { ContainerBox } from '../../styles/components/sidebar';
import { IUser } from '../../types/interfaces';
import MenuData from '../../utils/menu_item.json';
import { SwitcherTheme } from '../switcherTheme';
import SideBarItem from './sidebarItem';

interface Props {
  toggleTheme(): void;
  userData: IUser | undefined;
}
interface IMenuData {
  name: string;
  category: string;
  icon_name: string;
  to: string;
}

export default function SideBar({ toggleTheme, userData }: Props) {
  const { title } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <ContainerBox open={isOpen} sx={{ flexGrow: 1 }}>
      <div className='switcher_box'>
        {isOpen && <SwitcherTheme title={title} toggleTheme={toggleTheme} />}
        <div>
          <IconButton
            size='medium'
            color='inherit'
            title={isOpen ? 'Minimizar' : 'Maximizar'}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='material-icons'>{isOpen ? 'chevron_left' : 'chevron_right'}</span>
          </IconButton>
        </div>
      </div>

      <StyledDivider />

      {isOpen && (
        <>
          <div className='box_user_info'>
            <p className='greetings_user'>Bem vindo</p>
            <p className='name_user'>{userData?.name}</p>
          </div>

          <StyledDivider />
        </>
      )}

      <div className='box_items'>
        {MenuData.map((item: IMenuData, key) => (
          <SideBarItem
            key={key}
            name={item.name}
            category={item.category}
            icon_name={item.icon_name}
            to={item.to}
            open={isOpen}
          />
        ))}
      </div>
    </ContainerBox>
  );
}
