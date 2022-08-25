import { useFormik } from 'formik';
import { useContext } from 'react';
import * as yup from 'yup';

import { AuthContext } from '../../context/authContext';
import { LoginFormContainer } from '../../styles/components/loginForm';
import StyledButton from '../../styles/components/styledButton';
import StyledTextField from '../../styles/components/styledTextField';

export function LoginForm() {
  const { Login } = useContext(AuthContext);

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      Login(values);
    },
  });

  return (
    <LoginFormContainer>
      <div className='content'>
        <form onSubmit={formik.handleSubmit}>
          <div className='form_content'>
            <StyledTextField
              fullWidth
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className='form_content'>
            <StyledTextField
              fullWidth
              id='password'
              name='password'
              label='Password'
              type='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className='form_content button_content'>
            <StyledButton color='primary' variant='contained' fullWidth type='submit'>
              Login
            </StyledButton>
          </div>
        </form>
      </div>
    </LoginFormContainer>
  );
}
