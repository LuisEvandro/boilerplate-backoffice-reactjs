import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      background: string;
      backgroundComponents: string;

      titles: string;
      labels: string;
      text: string;

      white: string;
    };
  }
}
