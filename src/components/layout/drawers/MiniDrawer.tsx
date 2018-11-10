import React from "react";
import { Drawer, IconButton, Divider, Typography } from "../../mui";
import { ChevronLeftIcon } from "../../mui/icons";
import { withStyles } from "src/components/mui/style";
import { compose } from "recompose";
import { ApplicationState } from "src/store";
import { LayoutActions } from "src/store/layout";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import DrawerContent from "../DrawerContent";
import classNames from "classnames";
import { styles, Styles } from "../jss/miniDrawer";

interface PropsFromState {
    open: boolean;
    subtitle: string;
}

interface PropsFromDispatch {
    onClose: () => void;
}

type Props = PropsFromState & PropsFromDispatch & Styles;

const MiniDrawer: React.SFC<Props> = ({ open, onClose, classes, subtitle }) => {
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbar}>
                <div className={classes.subtitle}>
                    <Typography>{subtitle}</Typography>
                </div>
                <IconButton onClick={onClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <DrawerContent />
        </Drawer>
    )
};

function mapState({ layout }: ApplicationState): PropsFromState {
    return {
        open: layout.drawerState == "open",
        subtitle: layout.subtitle
    }
}

function mapDispatch(dispatch: Dispatch): PropsFromDispatch {
    return bindActionCreators({
        onClose: () => LayoutActions.setDrawerState("closed")
    }, dispatch)
}

export default compose(
    withStyles(styles),
    connect(mapState, mapDispatch)
)(MiniDrawer);