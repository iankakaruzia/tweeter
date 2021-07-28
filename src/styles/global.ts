import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'NotoSans';
    src: local('NotoSans Medium'), local('NotoSans-Medium'),
      url('/fonts/notosans-medium-webfont.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'NotoSans';
      src: local('NotoSans Bold'), local('NotoSans-Bold'),
        url('/fonts/notosans-bold-webfont.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'NotoSans';
      src: local('NotoSans SemiBold'), local('NotoSans-SemiBold'),
        url('/fonts/notosans-semibold-webfont.woff2') format('woff2');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'NotoSans';
      src: local('NotoSans Regular'), local('NotoSans-Regular'),
        url('/fonts/notosans-regular-webfont.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body,
    button,
    input,
    textarea {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export default GlobalStyles
