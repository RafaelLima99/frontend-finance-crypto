import { createContext, useState, useEffect } from 'react';
import { signInRequest, recoverUserInformation } from '../services/auth';
import { parseCookies, setCookie } from 'nookies'
import Router from 'next/router'
// import { api } from 'services/api';

type User = {
    name: string;
    email: string;
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data:SignInData) => Promise<void> ;
    errorLogin: string | null
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }:any) {

    const [user, setUser]             = useState<User | null>(null)
    const [errorLogin, setErrorLogin] = useState(null)
    const isAuthenticated             = !! user;
    
    /**
     * Quando o usuario recarregar a página o useEffect vai pegar novamente as informações do user
     * sem o useEffect quando recarregasse a página os dados do user não seriam exibidos
     */
    useEffect( ()=> {

        const { 'finas-cripto-token': token } = parseCookies();

        if(token) {
            
            recoverUserInformation().then(response => {
               setUser(response.data)
            })
        }
        
    }, [])

    /** 
     * Função responsavel pela feature de login
     * Recebe os parametros email e password que vem da page login
     */
    async function signIn({email, password}: SignInData) {
        
        // signInRequest recebe o email e senha e retorna: token, user, status, message
        const {token, user, status, message} = await signInRequest ({
            email,
            password,
        })

        console.log(token)

        // se o status for igual a Error, aconteceu algum erro na API e a descrição está na const message
        if(status === 'Error'){

            // atribui a descrição do erro para errorLogin que pode ser acessado em qualquer page do sistema
            setErrorLogin(message)
            Router.push('/login');
            
        } else {
            
            // cria um cookie com nome finas-cripto-token
            // esse cookie armazena o token de autentiação da API
            setCookie(undefined, 'finas-cripto-token', token, {
                maxAge: 60 * 60 * 1, //1 hora de expiração
            })
    
            //api.defaults.headers.common['Autorization'] = `Bearer ${token}`;
            
            //se as informações do user logado para ficar disponivel para todas as pages
            setUser(user)
    
           // Router.push('/');
           //window.location redireciona para uma pagina recarregando todo o seu contéudo
           //não apagar pois precisa reacarregar o componet ButtonProfile para fazer logof
           window.location.href = '/'
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, errorLogin}}>
            {children}
        </AuthContext.Provider>
    )
}
