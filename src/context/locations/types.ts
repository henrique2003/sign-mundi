export interface ILocationContextData {
  locations: ILocation[]
  connectionLocStatus: boolean
  loadingLocStatus: boolean
  createNewLoc: (newLocation: ILocation) => void
  editLoc: (location: ILocation) => void
  deleteLoc: (location: ILocation) => void
  loadLocations: () => Promise<void>
}

export interface ILocation {
  _id: string
  title: string
  link: string
  image: string
  lati: string
  long: string
}
