import { api } from './api'

type SignInRequestData = {
    email: string;
    password: string;
}

export async function signInRequest(data: SignInRequestData){
   
    const userData:any = api.post("auth/login", data).
    then((response) => {return response.data} ).
    catch(function (error) { 

        const userErro = {
            token: null, 
            user:null, 
            status: error.response.data.status,
            message: error.response.data.message
        }

        return userErro
    })

    return userData
}

export async function recoverUserInformation() {
 
    const userinformation:any = api.get("auth/userinf ormation").
    then((response) => {return response.data} ).
    catch(function (error) { 

        return { user:null }
    })

    return userinformation
}    


export async function isLogged(token:any) {
    
    if(!token){
        return {
          redirect: { destination:'/login',  permanent:false }
        }
    }
     
    return {
        props: {}
    }
}


export function logoutUser() {
   
    let logout = true;
    api.post("auth/logout",[]).
    then((response) => {return response.data} ).
    catch(function () { 
        logout = false;
    })

    return logout

}
