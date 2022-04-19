import React, { useState, createContext } from 'react';
import * as firebase from "firebase";


import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ childern }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u)
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      })
  };

  retun(
    <AuthenticationContextProvider
      value={{
        user, 
        isLoading,
        error,
        onLogin, 
      }}
    >
      {childern}
    </AuthenticationContextProvider>
  )
}