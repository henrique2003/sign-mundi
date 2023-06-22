import { useEffect, useState } from 'react'
import { PROVIDER_GOOGLE } from 'react-native-maps'
import Feather from 'react-native-vector-icons/Feather'

import { Container, ListButton, MapContainer } from './styles'
import locationsMock from '../../mocks/locations'
import { type ILocation, MapMarker, VideoCountryModal, ListModal } from '../../components'

const Maps: React.FC = () => {
  const [locations, setLocations] = useState<ILocation[]>([])
  const [videoModalVisible, setVideoModalVisible] = useState(false)
  const [listModalVisible, setListModalVisible] = useState(false)
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

  function openVideoModal(location: ILocation): void {
    setVideoModalVisible(true)
    setCurrentLocation(location)
  }

  function handleCloseVideoModal(): void {
    setVideoModalVisible(false)
  }

  function handleCloseListModal(): void {
    setListModalVisible(false)
  }

  function handleOpenVideo(location: ILocation): void {
    setListModalVisible(false)
    setVideoModalVisible(true)
    setCurrentLocation(location)
  }

  return (
    <Container>
      <ListButton
        activeOpacity={0.8}
        onPress={() => setListModalVisible(true)}
      >
        <Feather name="more-horizontal" size={30} color="rgba(0,0,0,0.8)" />
      </ListButton>
      <MapContainer
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: '-13.5857876',
          longitude: '-50.6026496'
        }}>
        {locations.length > 0 && locations.map((location, index) => (
          <MapMarker
            openModal={openVideoModal}
            key={index}
            location={location} />
        ))}
      </MapContainer>
      <VideoCountryModal
        location={currentLocation}
        modalVisible={videoModalVisible}
        handleCloseModal={handleCloseVideoModal}
      />
      <ListModal
        locations={locations}
        modalVisible={listModalVisible}
        handleCloseModal={handleCloseListModal}
        handleOpenVideo={handleOpenVideo}
      />
    </Container>
  )
}

export default Maps
