import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { breakpoints } from "./fragments/breakpoints";
import { palette } from "./fragments/palette";
import { typography } from "./fragments/typography";

// MUI v5 default theme config can be found here:
// https://mui.com/material-ui/customization/default-theme/

const fragments = {
  breakpoints,
  palette,
  typography,
};

const defaultThemeOverrides = {
  typography: {
    fontFamily: "Lato, Arial"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      ::-webkit-scrollbar {
        width: 3px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 2;
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-400.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 400;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-400italic.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 500;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-700.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 500;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-700italic.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-700.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 700;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-900italic.woff2') format('woff2');
      }
        p, h1, h2, h3, h4, h5, h6, body1, body2 {
          cursor: default;
        }
      `
    }
  }
};

export const theme = createTheme(deepmerge(fragments, defaultThemeOverrides));
