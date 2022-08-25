import { Box } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import AuthLogin from './authForms/authLogin';

interface Props {
  toggleTheme(): void;
}

export default function Login({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext);

  return (
    <Box>
      <AuthLogin toggleTheme={toggleTheme} themeTitle={title} />
    </Box>
  );
}
