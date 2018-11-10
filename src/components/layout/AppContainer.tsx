import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Store } from "redux";
import { compose } from "recompose";
import { Provider, connect } from "react-redux";
import { CssBaseline } from "../mui";
import { MuiThemeProvider, Theme } from "../mui/style";
import { theme } from "src/theme";
import { ApplicationState } from "src/store";
import { AppRoutes } from "../pages";

interface OwnProps {
  store: Store<ApplicationState>
}

interface PropsFromState {
  theme: Theme
}

type Props = OwnProps & PropsFromState;

function mapState(state: ApplicationState): PropsFromState {
  return { theme: theme.getTheme(state.layout.themeType) };
}

const App: React.SFC<Props> = ({ store, theme }) => {
  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoutes />
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
}

export default compose<Props, OwnProps>(
  connect(mapState),
)(App);
