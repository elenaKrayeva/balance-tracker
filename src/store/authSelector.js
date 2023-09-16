import { createSelector } from "@reduxjs/toolkit";

const errorMessage = (state) => state.auth.error; 

export const getErrorMessage = createSelector(
    [errorMessage],
    (error) => {
        if (error === "auth/wrong-password") {
            return error = "Неправильный пароль"
        };
        if (error === "auth/user-not-found") {
            return error = "Пользователь не существует"
        };
        if (error === "auth/invalid-email") {
            return error = "Неправильный email"
        };

    }
    
)