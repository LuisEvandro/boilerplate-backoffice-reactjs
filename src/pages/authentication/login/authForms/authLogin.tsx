import { LoginForm } from '../../../../components/loginForm';
import { SwitcherTheme } from '../../../../components/switcherTheme';
import { AuthLoginContainer } from '../../../../styles/pages/authLogin';

interface Props {
  toggleTheme(): void;
  themeTitle: string;
}

export default function AuthLogin({ toggleTheme, themeTitle }: Props) {
  return (
    <AuthLoginContainer>
      <div className='content_theme'>
        <SwitcherTheme title={themeTitle} toggleTheme={toggleTheme} />
      </div>
      <div className='content_form'>
        <h1>LOGIN</h1>
        <LoginForm />
      </div>
    </AuthLoginContainer>
  );
}
