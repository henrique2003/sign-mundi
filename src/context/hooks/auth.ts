import { useContext } from 'react'

import { AuthContext } from '../auth'
import { type IAuthContextData } from '../auth/types'

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  return context
}
