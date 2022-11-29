import axios from "axios";
export const countriesLoader=async()=>{
    return axios.get("https://restcountries.com/v3.1/all")
}

export const countryDetailsLoader=async({params})=>{
    return axios.get(`https://restcountries.com/v3.1/name/${params.countryName}`)
}