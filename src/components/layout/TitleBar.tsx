import React from "react";
import classNames from "classnames";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { AppBar, Toolbar, IconButton, Typography } from "src/components/mui";
import { withStyles } from "src/components/mui/style";
import { withWidth, WithWidth, isWidthDown } from "src/components/mui/width";
import { MenuIcon } from "src/components/mui/icons";
import { ApplicationState } from "src/store";
import { LayoutActions } from "src/store/layout";
import { styles, Styles } from "./jss/titleBar";

interface PropsFromState {
  drawerOpen: boolean,
  title: string
};

interface PropsFromDispatch {
  openDrawer: () => void
}

type Props = PropsFromState & PropsFromDispatch & Styles & WithWidth;

const TitleBar: React.SFC<Props> = ({ width, classes, drawerOpen, openDrawer, title }) => {
  const isMobile = isWidthDown("sm", width, true);
  const appBarClasses = classNames(classes.appBar, (!isMobile && drawerOpen && classes.shifted));
  const iconButtonClasses = classNames((isMobile ? classes.mobileMenuButton : classes.menuButton), (!isMobile && drawerOpen && classes.hide));
  const disableGutters = !drawerOpen && !isMobile;
  return (
    <AppBar position="absolute" elevation={5} className={appBarClasses}>
      <Toolbar disableGutters={disableGutters}>
        <IconButton color="inherit" area-label="Open Drawer" onClick={openDrawer} className={iconButtonClasses}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

function mapState({ layout }: ApplicationState): PropsFromState {
  return {
    drawerOpen: layout.drawerState === "open",
    title: layout.title
  };
}

function mapDispatch(dispatch: Dispatch): PropsFromDispatch {
  return bindActionCreators({
    openDrawer: () => LayoutActions.setDrawerState("open")
  }, dispatch);
}

export default compose(
  withWidth(),
  withStyles(styles),
  connect(mapState, mapDispatch)
)(TitleBar)