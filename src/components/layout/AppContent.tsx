import React from "react";
import { Route } from "react-router-dom";
import { compose } from "recompose";
import { HomePage, AboutPage } from "src/components/pages";
import { withStyles, WithStyles, createStyles } from "../mui/style";

const styles = createStyles({});

type Props = WithStyles<typeof styles>;

const AppContent: React.SFC<Props> = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </>
  )
}

export default compose(
  withStyles(styles)
)(AppContent);