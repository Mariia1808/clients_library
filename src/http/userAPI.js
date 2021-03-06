import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, email, password) => {
    const {data} = await $host.post('https://arcane-everglades-82036.herokuapp.com/api/user/registration', {name, email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('https://arcane-everglades-82036.herokuapp.com/api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('https://arcane-everglades-82036.herokuapp.com/api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const fetchUser = async () => {
    const {data} = await $host.get('api/user/')
    return data
}

export const fetchOneUser = async (id) => {
    const {data} = await $authHost.get('api/user/'+ id)
    return data
}
export const fetchRecipes = async () => {
    const {data} = await $host.get('api/recipe/')
    return data
}
