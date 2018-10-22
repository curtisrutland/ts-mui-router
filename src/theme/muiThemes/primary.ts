import { createMuiTheme } from "src/components/mui/style";
import { AppTheme } from "../appTheme";

const primary = {
  light: "#7357b9",
  main: "#512da8",
  dark: "#381f75",
  contrastText: "#fff"
};

const secondary = {
  light: "#eb6e47",
  main: "#e64a19",
  dark: "#a13311",
  contrastText: "#fff"
};

const typography = { useNextVariants: true };

const lightTheme = createMuiTheme({
  typography,
  palette: {
    primary,
    secondary
  }
});

const darkTheme = createMuiTheme({
  typography,
  palette: {
    type: "dark",
    primary,
    secondary
  }
});

export const primaryTheme = new AppTheme(lightTheme, darkTheme);