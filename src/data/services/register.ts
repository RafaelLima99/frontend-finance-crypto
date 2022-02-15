import { api } from './api';

type RegisterRequestData = {
    name: string,
    email: string,
    password: string
}
  
export function createUser(data:RegisterRequestData){
    //console.log(data)

    const response = api.post("auth/register", {

        name:     data.name,
        email:    data.email, 
        password: data.password

    }).catch(function (error) {

        if (error.response) {
            return error.response.data
        }

      });

    return response
}