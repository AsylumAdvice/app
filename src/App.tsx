import React from 'react';
import Button from '@material-ui/core/Button';
import MetaTags from 'react-meta-tags';

export default function App() {
  return <>
    <MetaTags> /** https://material-ui.com/getting-started/usage/#responsive-meta-tag */
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </MetaTags>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <p>
      Hello world!
    </p>
  </>
}
