import type { NextPage } from 'next'
import React from 'react'
import Table from '../ui/components/Table/Table'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


const Home: NextPage = () => {
  return ( 
    <div>
      <Container>  
        <Box sx={{ mt: "6rem" }} >
          <Grid container spacing={2}>
            <Grid item xs={8} md={4}>
              <TextField fullWidth label="Pesquisar moeda" id="fullWidth" size="small"/>
            </Grid>
            <Grid item xs={4} md={8}>
              <Button variant="contained" color="warning" >
                <SearchIcon/>
              </Button>
            </Grid>
          </Grid>
        </Box> 
      </Container>
      <Table></Table>
      
    </div>
  ) 
}

export default Home
