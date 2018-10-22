import { Theme, createStyles, WithStyles } from "src/components/mui/style";

const drawerWidth = 240;

export const styles = (theme: Theme) => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    shifted: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 12,
    },
    mobileMenuButton: {
        marginLeft: 0,
        marginRight: 12
    },
    hide: {
        display: "none"
    }
});

export type Styles = WithStyles<typeof styles>;