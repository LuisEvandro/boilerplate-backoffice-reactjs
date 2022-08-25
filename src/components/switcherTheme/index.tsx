import { FormControlLabel, FormGroup, Switch } from '@mui/material';

interface Props {
  title: string;
  toggleTheme: () => void;
}

export function SwitcherTheme({ title, toggleTheme }: Props) {
  return (
    <FormGroup>
      <FormControlLabel
        label={title === 'dark' ? 'Light theme' : 'Dark theme'}
        control={
          <Switch checked={title === 'dark'} onChange={toggleTheme} aria-label='theme switch' />
        }
      />
    </FormGroup>
  );
}
