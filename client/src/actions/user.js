import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            password
        }).then((e)=>{console.log(e)})
        /*alert(response.data.message)*/
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login = async (email, password) => {
    return async (dispatch) =>{
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            }).then((e)=>{
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', response.data.token)
                console.log(response.data)
            })

        } catch (e) {
            alert(e.response.data.message)
        }
    }
}