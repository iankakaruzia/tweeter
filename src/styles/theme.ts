export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "NotoSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    sizes: {
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.4rem',
      large: '3.6rem'
    }
  },
  colors: {
    primary: '#2F80ED',
    secondary: '#EB5757',
    mainBg: '#FAFAFB',
    lightBg: '#FFFFFF',
    text: '#333333',
    lightText: '#4F4F4F',
    btnText: '#FFFFFF',
    lightGray: '#EAEAEA',
    gray: '#BDBDBD',
    darkGray: '#828282',
    border: '#e0e0e0',
    headerBg: '#f2f2f2'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
