import AsyncStorage from '@react-native-async-storage/async-storage'

import { type IAdmin } from '../context/auth/types'

type IAsyncStorageValue = IAdmin | string

export async function setAsyncStorage(key: string, value: IAsyncStorageValue): Promise<void> {
  const stringfyValue = typeof value !== 'string' ? JSON.stringify(value) : value

  await AsyncStorage.setItem(key, stringfyValue)
}

export async function removeAsyncStorage(key: string): Promise<void> {
  await AsyncStorage.removeItem(key)
}
