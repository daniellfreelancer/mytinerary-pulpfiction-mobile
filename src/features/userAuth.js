import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: 'auth',

    initialState: {
        name: null,
        logged: false,
        id: null,
        photo:null,
        role:null,
        country:null,
        email:null,
        lastName:null
    },
    reducers : {
        setUserLogin: (state, action) =>{
            state.name = action.payload.name
            state.lastName = action.payload.lastName
            state.id = action.payload.id
            state.photo = action.payload.photo
            state.role = action.payload.role
            state.country = action.payload.country
            state.email = action.payload.email
            state.logged = true
        },
        setUserLogout: (state, action) =>{
            state.name = null
            state.logged = false
            state.id = null
            state.photo = null
            state.role = null
            state.country = null
            state.email = null
            state.lastName = null
        }
    }
})


export const { setUserLogin,setUserLogout} = authSlice.actions
export default authSlice.reducer
