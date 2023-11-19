import axios from "axios";

const STRIPE_TOKEN = process.env.REACT_APP_STRIPE_API_TOKEN;
const STRIPE_BASE_URL = process.env.REACT_APP_BASE_URL;

const params = {
    headers:{
        Authorization: "bearer " + STRIPE_TOKEN
    },
}

export const fetchDataFromApi = async (url) =>{

    try {

        const {data} = await axios.get(STRIPE_BASE_URL + url, params)
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}

export const makePaymentRequest = axios.create({
    baseURL: STRIPE_BASE_URL,
    headers:{
        Authorization:"bearer " + STRIPE_TOKEN 
    },
});