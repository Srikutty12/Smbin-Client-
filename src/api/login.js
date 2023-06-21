import axios from "axios"

export const login = (body) => {
    return axios.post(process.env.REACT_APP_BACKEND_URL + "/auth/login", body)
}