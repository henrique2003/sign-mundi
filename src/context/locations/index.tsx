import React, { createContext, useState } from 'react'

import { type ILocationContextData, type ILocation } from './types'
import api from '../../services/api'

interface Props {
  children: JSX.Element
}

export const LocationContext = createContext({} as ILocationContextData)

export const LocationProvider: React.FC<Props> = ({ children }) => {
  const [locations, setLocations] = useState<ILocation[]>([])
  const [connectionLocStatus, setConnectionStatus] = useState(false)
  const [loadingLocStatus, setLoadingStatus] = useState(true)

  function createNewLoc(newLocation: ILocation): void {
    setLocations([...locations, newLocation])
  }

  function editLoc(location: ILocation): void {
    setLocations(locations.map(item => {
      if (item._id === location._id) item = location

      return item
    }))
  }

  function deleteLoc(id: string): void {
    setLocations(locations.filter(item => item._id !== id))
  }

  async function loadLocations(): Promise<void> {
    try {
      setLoadingStatus(true)

      const { data } = await api.get('/locations')
      setLocations(data.locations)

      setConnectionStatus(true)
      setLoadingStatus(false)
    } catch (error) {
      setConnectionStatus(false)
      setLoadingStatus(false)
    }
  }

  return (
    <LocationContext.Provider value={{
      createNewLoc,
      editLoc,
      deleteLoc,
      loadLocations,
      locations,
      connectionLocStatus,
      loadingLocStatus
    }}>
      {children}
    </LocationContext.Provider>
  )
}
