import { createSlice } from '@reduxjs/toolkit'


// Define a type for the slice state

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: {
        Nome: '',
        Perm: '',
        Email: '',        
    }},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    }
    })

    export const { login } = userSlice.actions
    export default userSlice.reducer 