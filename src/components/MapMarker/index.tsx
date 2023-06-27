import { Marker } from 'react-native-maps'

import { Content, Image } from './styles'
import { type ILocation } from '../../context/locations/types'

interface IProps {
  location: ILocation
  openModal: (location: ILocation) => void
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
