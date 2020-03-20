import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';

import MetaTags from 'react-meta-tags';
import { MenuBar, OverviewCard } from './Home';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }),
);

export default function App() {
  const classes = useStyles();
  return <>
    <div className={classes.root}>
      <CssBaseline />
      {/* https://material-ui.com/getting-started/usage/#responsive-meta-tag */}
      <MetaTags>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </MetaTags>
      <MenuBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          <OverviewCard />
          {/* <MapCard /> */}
        </Typography>
      </main>
    </div>
  </>
}
