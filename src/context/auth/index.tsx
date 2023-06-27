import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { type IAuthContextData, type IAdmin } from './types'

import api from '../../services/api'
import { setAsyncStorage } from '../../utils/async-storage'

interface Props {
  children: JSX.Element
}

export const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [admin, setAdmin] = useState<IAdmin | null>(null)
  const [isSignIn, setIsSignIn] = useState<boolean>(false)
  const [isLogged, setIsLogged] = useState<boolean>(false)

  async function signIn(username: string, password: string): Promise<void> {
    setIsSignIn(true)

    const { data: { admin, token } } = await api.post('/admin/login', {
      username,
      password
    })

    api.defaults.headers.common.authorization = `Bearer ${token as string}`

    void setAsyncStorage('admin', admin)
    void setAsyncStorage('token', token)

    setAdmin(admin)
    setIsLogged(true)
    setIsSignIn(false)
  }

  async function signOut(): Promise<void> {
    setAdmin(null)
    setIsLogged(false)

    await AsyncStorage.removeItem('admin')
    await AsyncStorage.removeItem('token')
  }

  useEffect(() => {
    async function loadAdmin(): Promise<void> {
      const adminStorage = await AsyncStorage.getItem('admin')
      const tokenStorage = await AsyncStorage.getItem('token')

      if (adminStorage && tokenStorage) {
        api.defaults.headers.common.authorization = `Bearer ${tokenStorage}`
        setAdmin(JSON.parse(adminStorage))
        setIsLogged(true)
      }

      setIsSignIn(false)
    }

    void loadAdmin()
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      admin,
      isLogged,
      isSignIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}
