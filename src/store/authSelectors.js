import { createSelector } from "@reduxjs/toolkit";

export const getUser = (state) => state.auth.user;

const errorMessage = (state) => state.auth.error;

export const getErrorMessage = createSelector([errorMessage], (error) => {
  if (error === "auth/wrong-password") {
    return (error = "Неправильный пароль");
  }
  if (error === "auth/user-not-found") {
    return (error = "Пользователь не существует");
  }
  if (error === "auth/invalid-email") {
    return (error = "Неправильный е-мейл");
  };
  if (error === "Cannot read properties of undefined (reading 'user')") {
    return (error = "");
  }
  if (error === "Firebase: Error (auth/email-already-in-use).") {
    return (error = "Е-мейл уже зарегистрирован");
  };
  if (error === "Firebase: Error (auth/invalid-email).") {
    return (error = "Неправильный е-мейл");
  };
  if (error === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
    return (error = "Пароль должен быть не короче 6 символов");
  };

});