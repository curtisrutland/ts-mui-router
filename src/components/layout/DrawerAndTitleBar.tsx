import React from "react";
import { compose } from "recompose";
import { withStyles, WithStyles, createStyles, Theme } from "../mui/style";
import { withWidth, WithWidth, isWidthDown } from "../mui/width";
import MobileDrawer from "./drawers/MobileDrawer";
import TitleBar from "./TitleBar";
import MiniDrawer from "./drawers/MiniDrawer";

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    height: "100vh",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  main: {
    flex: 1,
    overflow: "auto",
    display: "flex",
    flexFlow: "column nowrap"
  }
})

type Props = WithWidth & WithStyles<typeof styles>;

const DrawerAndTitleBar: React.SFC<Props> = ({ classes, width, ...props }) => {
  const isMobile = isWidthDown("sm", width, true);
  const drawer = isMobile ? <MobileDrawer /> : <MiniDrawer />
  return (
    <div className={classes.root}>
      <TitleBar />
      {drawer}
      <main className={classes.main}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

const WrappedDrawerAndTitleBar = compose(
  withWidth(),
  withStyles(styles)
)(DrawerAndTitleBar);

export default WrappedDrawerAndTitleBar;

type Content = React.ComponentClass | React.StatelessComponent;

export const withDrawerAndTitleBar = (Child: Content): React.SFC => () => {
  return (
    <WrappedDrawerAndTitleBar>
      <Child />
    </WrappedDrawerAndTitleBar>
  )
}