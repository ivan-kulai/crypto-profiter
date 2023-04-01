import { createTheme } from '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    up: string;
    down: string;
  }
  export interface TextProps {
    colorSecondary?: boolean;
    colorUp?: boolean;
    colorDown?: boolean;
    bold?: boolean;
    h5?: boolean;
    h6?: boolean;
  }
}

const theme = createTheme({
  darkColors: {
    up: '#03fa24',
    down: 'red',
    secondary: '#bbbaba',
    background: '#0b0e11',
  },
  components: {
    Text: (props) => {
      let color;
      if (props.colorUp) color = '#03fa24';
      else if (props.colorDown) color = 'red';
      else if (props.colorSecondary) color = '#bbbaba';
      else color = 'white';

      let fontSize;
      if (props.h5) fontSize = 19;
      else if (props.h6) fontSize = 17;
      else fontSize = 15;

      return {
        style: {
          color: color,
          fontWeight: props.bold ? 'bold' : 'normal',
          fontSize: fontSize,
        },
        h1Style: {
          fontWeight: props.bold ? 'bold' : 'normal',
        },
        h2Style: {
          fontWeight: props.bold ? 'bold' : 'normal',
        },
        h3Style: {
          fontWeight: props.bold ? 'bold' : 'normal',
        },
        h4Style: {
          fontWeight: props.bold ? 'bold' : 'normal',
        },
      };
    },
  },
  mode: 'dark',
});

export default theme;
