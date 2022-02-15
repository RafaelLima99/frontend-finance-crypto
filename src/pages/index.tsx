import type { NextPage } from 'next'
import React from 'react'
import Table from '../ui/components/Table/Table'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { isLogged } from '../data/services/auth';
import NavBar from '../ui/components/NavBar/NavBar'
import type { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { useContext } from 'react'

import { AuthContext } from '../data/contexts/AuthContext'

const Home: NextPage = () => {

  const { user } = useContext(AuthContext)

  return ( 
    <div>
      <NavBar/>
      <Container>  
        <Box sx={{ mt: "6rem" }} >
          <Grid container spacing={2}>
            <Grid item xs={8} md={4}>
            {user?.name}
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


// verifica usando SSR se o usuario está logado 
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { 'finas-cripto-token': token } = parseCookies(ctx);
  const response =  isLogged(token);

  return response
   
}
