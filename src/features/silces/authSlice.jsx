import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    role: 'admin',
    userData: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.role = 'admin';
            state.userData = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.role = '';
            state.userData = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
