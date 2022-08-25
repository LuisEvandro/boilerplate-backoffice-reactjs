import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import SideBar from './components/sidebar';
import { AuthContext } from './context/authContext';
import Login from './pages/authentication/login';
import Dashboard from './pages/dashboard';
import ToastReactStyled from './styles/components/styledToast';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const { isAuthenticated, user } = useContext(AuthContext);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastReactStyled />
      <BrowserRouter>
        <div className='main_container'>
          {isAuthenticated && (
            <div className='sidebar_content'>
              <SideBar toggleTheme={toggleTheme} userData={user} />
            </div>
          )}

          <div className='page_content'>
            {isAuthenticated ? (
              <div className='page_render'>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                </Routes>
              </div>
            ) : (
              <Routes>
                <Route path='/*' element={<Login toggleTheme={toggleTheme} />} />
              </Routes>
            )}
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
