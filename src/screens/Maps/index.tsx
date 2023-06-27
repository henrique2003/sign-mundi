import { useEffect, useState } from 'react'
import { PROVIDER_GOOGLE } from 'react-native-maps'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { requestForegroundPermissionsAsync } from 'expo-location'

import { Container, ListButton, MapContainer, LoginButton } from './styles'
import { type ILocation, MapMarker, VideoCountryModal, ListModal, ConnectionErrorModal } from '../../components'
import api from '../../services/api'

interface Props {
  navigation: {
    navigate: (route: string) => void
  }
}

const Maps: React.FC<Props> = ({
  navigation
}) => {
  const [locations, setLocations] = useState<ILocation[]>([])
  const [connectionStatus, setConnectionStatus] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState(true)
  const [videoModalVisible, setVideoModalVisible] = useState(false)
  const [listModalVisible, setListModalVisible] = useState(false)
  const [currentLocation, setCurrentLocation] = useState<ILocation>({
    _id: '',
    image: '',
    lati: '',
    link: '',
    long: '',
    title: ''
  })

  useEffect(() => {
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

    async function getPermission(): Promise<void | null> {
      const { status } = await requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return null
      }
    }

    void getPermission()
    void loadLocations()
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

  function handleCloseConnectionErrorModal(): void {
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
          latitude: -15.7795,
          longitude: -47.9297,
          latitudeDelta: 40,
          longitudeDelta: 40
        }}
      >
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
      <LoginButton
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Login')
        }}
      >
        <MaterialIcons name="admin-panel-settings" size={30} color="rgba(0,0,0,0.8)" />
      </LoginButton>
      <ConnectionErrorModal
        connectionStatus={connectionStatus}
        loadStatus={loadingStatus}
        modalVisible={!connectionStatus}
        handleCloseModal={handleCloseConnectionErrorModal}
      />
    </Container>
  )
}

export default Maps