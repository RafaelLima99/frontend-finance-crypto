import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from "@mui/material";
import {useForm} from 'react-hook-form';
import { createUser } from '../data/services/register'
import { useState } from 'react';
import Router from 'next/router';
import Alert from '@mui/material/Alert';

const GridRegisterRight = styled(Grid)`

  padding-left: 2rem;
  padding-right: 2rem;

  ${props => props.theme.breakpoints.up('xs')}{
    height: 80vh;
  }

  ${props => props.theme.breakpoints.up('md')}{
    height: 100vh;
    padding-left: 8rem;
    padding-right: 8rem;
  }
`
const GridRegisterLeft = styled(Grid)`

  
  ${props => props.theme.breakpoints.up('xs')}{
    height: 20vh;
  }

  ${props => props.theme.breakpoints.up('md')}{
    height: 100vh;
   
  }
`

const ButtonLogin = styled(Button)`
  height:2.5rem;
  width: 15rem;
`

const Title = styled('h1')`
  text-align:center;
  height: 4rem;
`

type RegisterRequestData = {
  name: string,
  email: string,
  password: string
}

const Register: NextPage = () => {

  const { register, handleSubmit, watch, formState: { errors }  } = useForm();
  const [registerError, setRegisterError] = useState("") 
  
  async function handleRegister(data:RegisterRequestData) {
    
    //Envia os dados para a função createUser que é responsável por cadastrar o user e retornar o status
    let response =  await createUser(data)

    if(response.status == 200){
      Router.push('/login');
    }

    if(response.status == 'Error'){
      setRegisterError(response.message)
      // console.log(response.message)
    }
  }

  return(
    <Box >
      <Grid container >
        <GridRegisterLeft item xs={12} md={6} border={1}>
          Lado A
        </GridRegisterLeft>
        <GridRegisterRight item xs={12} md={6} border={1}>
          <Title>Criar Conta</Title>
          {registerError && <Alert severity="error">{registerError}</Alert>} 
          <TextField  
            {...register('name', { 
              required: {
                value:true,
                message:"O campo nome é obrigatorio"
              }
            })}
            {...(errors.name && {error:true,  helperText:errors.name.message})}
            sx={{ mb: "1.5rem" , mt: "1.5rem"}} 
            fullWidth label="Nome" 
            id="name"  
          />
          
          <TextField 
            {...register('email', { 
              required: {
                value:true,
                message:"O campo email é obrigatorio"
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "O valor inserido não corresponde ao formato de e-mail"
              }
            })}
            {...(errors.email && {error:true,  helperText:errors.email.message})}
            sx={{ mb: "1.5rem" }} 
            fullWidth label="E-mail"
            id="email" 
          />
        
          <TextField 
            {...register('password', {
              required: {
                value:true,
                message:"O campo senha é obrigatorio"
              }})}
            {...(errors.password && {error:true,  helperText:errors.password.message})} 
            sx={{ mb: "1.5rem" }}
            fullWidth label="Senha" 
            id="password" 
          />
         
          <Grid sx={{mx: 'auto', width:230}} >
            <ButtonLogin variant="contained" onClick={handleSubmit(handleRegister)}>Criar Conta</ButtonLogin>
          </Grid>
         
        </GridRegisterRight>
         
      </Grid>
    </Box>
    )
}

export default Register
