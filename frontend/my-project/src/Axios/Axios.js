import axios from 'axios'

export const  axiosUserInstance = axios.create({
  baseURL:'http://localhost:4000/api'
})
export const axiosAdminInstance = axios.create({
    baseURL:'http://localhost:4000/api/'
})
