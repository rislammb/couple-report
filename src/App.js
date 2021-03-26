import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CssBaseline } from '@material-ui/core';
import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Content';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:
      theme.palette.type === 'light'
        ? 'linear-gradient(to right, #fff4e3, #f9ffdc, #fff2ff)'
        : 'linear-gradient(to right, #333, #373737)',
  },
  contentDiv: {
    marginTop: 15,
    '@media print': {
      marginTop: 0,
      paddingTop: 45,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Paper className={classes.root}>
        <CssBaseline />
        <Navbar />
        <div className={classes.contentDiv}>
          <Content />
        </div>
      </Paper>
    </Router>
  );
}

export default App;
