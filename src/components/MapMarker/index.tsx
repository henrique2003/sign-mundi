import { Marker } from 'react-native-maps'

import { Content, Image } from './styles'

interface IProps {
  location: ILocation
  openModal: (location: ILocation) => void
}

export interface ILocation {
  title: string
  link: string
  image: string
  lati: string
  long: string
}

const MapMarker: React.FC<IProps> = ({
  location,
  openModal
}) => {
  const {
    lati,
    image,
    long
  } = location

  const latitude = parseFloat(lati)
  const longitude = parseFloat(long)

  return (
    <Marker coordinate={{
      latitude,
      longitude
    }}
      onPress={() => openModal(location)}>
      <Content>
        <Image source={{ uri: image }} />
      </Content>
    </Marker>
  )
}

export default MapMarker
