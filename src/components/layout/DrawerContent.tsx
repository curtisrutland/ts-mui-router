import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "src/components/mui/list";
import { createStyles, withStyles, WithStyles, Theme } from "src/components/mui/style";
import { SunIcon, MoonIcon, HomeIcon, InfoIcon } from "src/components/mui/icons";
import { compose } from "recompose";
import { Dispatch, bindActionCreators } from "redux";
import { LayoutActions } from "src/store/layout";
import { ThemeOptions } from "src/theme";
import { connect } from "react-redux";
import { ApplicationState } from "src/store";
import { createNavLink } from "src/helpers/links";

const styles = (theme: Theme) => createStyles({
  primary: {
    overflowY: "auto",
    overflowX: "hidden",
    flex: 1
  },
  active: {
    backgroundColor: "rgba(0, 0, 0, 0.14)"
  }
});

interface PropsFromState {
  theme: ThemeOptions
};

interface PropsFromDispatch {
  setTheme: (theme: ThemeOptions) => void;
};

type Props = PropsFromState
  & PropsFromDispatch
  & WithStyles<typeof styles>;

const DrawerContent: React.SFC<Props> = ({ classes, theme, setTheme }) => {
  const nextTheme = theme === "light" ? "dark" : "light";
  const toggleTheme = () => setTheme(nextTheme);
  const themeIcon = nextTheme === "light" ? <SunIcon /> : <MoonIcon />;
  const themeText = nextTheme === "light" ? "Light Theme" : "Dark Theme";
  return (
    <>
      <List className={classes.primary}>
        <ListItem button component={createNavLink("/", classes.active)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button component={createNavLink("/about", classes.active)}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={toggleTheme}>
          <ListItemIcon>{themeIcon}</ListItemIcon>
          <ListItemText>{themeText}</ListItemText>
        </ListItem>
      </List>
    </>
  )
};

function mapState(state: ApplicationState): PropsFromState {
  return ({ theme: state.layout.themeType });
}

function mapDispatch(dispatch: Dispatch): PropsFromDispatch {
  return bindActionCreators({ setTheme: LayoutActions.setThemeType }, dispatch);
}

export default compose(
  withStyles(styles),
  connect(mapState, mapDispatch)
)(DrawerContent);