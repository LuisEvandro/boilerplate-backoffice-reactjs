import { useLocation, useNavigate } from 'react-router-dom';

import { ContainerBoxSidebarItem } from '../../styles/components/sidebar/sidebarItem';

interface Props {
  name: string;
  category: string;
  icon_name: string;
  to: string;
  open: boolean;
}

export default function SideBarItem({ name, category, icon_name, to, open = false }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <ContainerBoxSidebarItem
      onClick={() => navigate(to)}
      title={name}
      open={open}
      active={pathname === to}
      className={category}
    >
      <div className='content_item'>
        <div className='item_icon'>
          <span className='material-icons'>{icon_name}</span>
        </div>
        {open && <div className='item_name'>{name}</div>}
      </div>
    </ContainerBoxSidebarItem>
  );
}
