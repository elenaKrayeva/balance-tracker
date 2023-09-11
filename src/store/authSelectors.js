import { createSelector } from "@reduxjs/toolkit";

export const getUser = (state) => state.auth.user;