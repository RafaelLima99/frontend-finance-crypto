import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {styled} from "@mui/material";
import { useContext, useState } from 'react';
import Alert from '@mui/material/Alert';

//parte do sistema de login
import {useForm} from 'react-hook-form';
import { AuthContext } from '../data/contexts/AuthContext';
import type { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'



const GridLoginRight = styled(Grid)`

  ${props => props.theme.breakpoints.up('xs')}{
    height: 70vh;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  /* ${props => props.theme.breakpoints.up('sm')}{
    height: 100vh;
    padding-left: 5rem;
    padding-right: 5rem;
  } */
  ${props => props.theme.breakpoints.up('md')}{
    height: 100vh;
    padding-left: 8rem;
    padding-right: 8rem;
  }
`
const Title = styled('h1')`
  text-align:center;
  height: 4rem;
`
const ButtonLogin = styled(Button)`
  height:2.5rem;
  width: 15rem;
`
const GridLoginLeft = styled(Grid)`

  ${props => props.theme.breakpoints.up('xs')}{
    height: 30vh;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  ${props => props.theme.breakpoints.up('md')}{
    height: 100vh;
    padding-left: 8rem;
    padding-right: 8rem;
  }
`

const Login: NextPage = () => {

  const { errorLogin } = useContext(AuthContext)

  /**
   * O register serve para registrar o input e ele recebe o seu name
   * se no input não tiver o register o useForm vai iguinoralo
   */

 /**
  * handleSubmit tem que se chamado no evento de click no butão submit, ele recebe uma função com qualquer nome e essa função
  * terá acesso as informações do input
  */

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext)
  
  async function handleSignIn(data:any){
    //Envia o e-mail e senha para a função responsável para o login
    await signIn(data)
  
  }
 
  return(
    <Box >
      <Grid container >
        <GridLoginLeft item xs={12} md={6} border={1}>
          Lado A  
        </GridLoginLeft>
        
        <GridLoginRight item xs={12} md={6} border={1} >
          <Title>Login</Title>
            { errorLogin && <Alert severity="error">{errorLogin}</Alert>} 

            <TextField
              sx={{ mb: "1.5rem", mt: "1.5rem" }} 
              {...register('email', { 
                required: {
                  value: true, 
                  message:"O campo e-mail é obrigatorio"
                }, 

                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "O valor inserido não corresponde ao formato de e-mail"
              }})} 
              {...(errors.email && {error:true, helperText:errors.email.message})}
              fullWidth label="E-mail"
              name="email"
              id="email"
            />
         
            <TextField 
              sx={{ mb: "1rem" }}
              {...register('password', {
                required: {
                  value:true,
                  message:"O campo senha é obrigatorio"
                }
              })} 
              {...(errors.password && {error:true,  helperText:errors.password.message})}
              fullWidth label="Senha"
              name="password" 
              id="password"
            />

            <Box sx={{ mb: "1.5rem" }}>
              Não tem uma conta? <a href="http://localhost:3000/register">Registre-se</a>
            </Box>
            
            <Grid sx={{mx: 'auto', width:230}} >
              <ButtonLogin variant="contained" onClick={handleSubmit(handleSignIn)}>Entrar</ButtonLogin>
            </Grid>
          </GridLoginRight>
      </Grid>
    </Box>
  )
}

export default Login

// verfica se o token já existe, se sim redireciona para /
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { 'finas-cripto-token': token } = parseCookies(ctx);

  if(token){
    return {
      redirect: { destination:'/',  permanent:false }
    }
  }

  return {
    props: {}
  }
   
}
