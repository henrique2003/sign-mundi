import { useEffect, useState } from 'react'
import { PROVIDER_GOOGLE } from 'react-native-maps'

import { Container, MapContainer } from './styles'
import locationsMock from '../../mocks/locations'
import { type ILocation, MapMarker, VideoCountryModal } from '../../components'

const Maps: React.FC = () => {
  const [locations, setLocations] = useState<ILocation[]>([])
  const [modalVisible, setModalVisible] = useState(false)
  const [currentLocation, setCurrentLocation] = useState<ILocation>({
    image: '',
    lati: '',
    link: '',
    long: '',
    title: ''
  })

  useEffect(() => {
    function loadLocations(): void {
      setLocations(locationsMock)
    }

    loadLocations()
  }, [])

  function openModal(location: ILocation): void {
    setModalVisible(true)
    setCurrentLocation(location)
  }

  function handleCloseModal(): void {
    setModalVisible(false)
  }

  return (
    <Container>
      <MapContainer
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: '-13.5857876',
          longitude: '-50.6026496'
        }}>
        {locations.length > 0 && locations.map(location => (
          <MapMarker
            openModal={openModal}
            key={location.lati}
            location={location} />
        ))}
      </MapContainer>
      <VideoCountryModal
        location={currentLocation}
        modalVisible={modalVisible}
        handleCloseModal={handleCloseModal}
      />
    </Container>
  )
}

export default Maps
