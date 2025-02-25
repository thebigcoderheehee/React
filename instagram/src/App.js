import Left_section from './components/Left_section';
import './App.css';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Right_Section from './components/Right_Section';
import Center_section from './components/Center_section';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function App() {
  return (
    <div className="App">
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <Left_section/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Center_section/>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <Right_Section/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default App;

