import axios from 'axios';

const URL = 'http://localhost:8000'
export const authenticateSignup = async (data) =>{
    try{
        // console.log(data,`${URL}/signup`);
       return await axios.post(`${URL}/signup`,data)
      
    }
    catch(error){
        console.log("Error while calling the api ",error);
    }
}

export const authenticateLogin = async (data) =>{
    try{
        // console.log(data,`${URL}/signup`);
       return await axios.post(`${URL}/login`,data)
      
    }
    catch(error){
        console.log("Error while calling the api ",error);
        return error.response;
    }
}

export const payUsingPaytm = async (data)=>{
    try{
        let response=axios.post(`${URL}/payment`,data);
        return (await response).data;
    }catch(error) {
            console.log("Error while calling payment api", error);
    }
}