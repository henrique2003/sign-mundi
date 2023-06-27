import { useContext } from 'react'

import { LocationContext } from '../locations'
import { type ILocationContextData } from '../locations/types'

export function useLocations(): ILocationContextData {
  const context = useContext(LocationContext)

  return context
}
