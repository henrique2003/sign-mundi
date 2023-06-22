import { useEffect, useState } from 'react'
import { useWindowDimensions, Modal } from 'react-native'
import { PROVIDER_GOOGLE } from 'react-native-maps'
import Icon from 'react-native-vector-icons/AntDesign'

import { Container, MapContainer, Close, Video, Title, Content } from './styles'
import locationsMock from '../../mocks/locations'
import MapMarker, { type ILocation } from '../../components/MapMarker'

const Maps: React.FC = () => {
  const [locations, setLocations] = useState<ILocation[]>([])
  const [modalVisible, setModalVisible] = useState(true)

  useEffect(() => {
    function loadLocations(): void {
      setLocations(locationsMock)
    }

    loadLocations()
  }, [])

  const { width } = useWindowDimensions()

  function openModal(location: ILocation): void {
    setModalVisible(true)
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
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <Content>
          <Close
            onPress={() => setModalVisible(false)}
          >
            <Icon size={30} color="rgba(0,0,0,0.8)" name="close" />
          </Close>
          <Title>Portugal</Title>
          <Video
            videoId="0GOUF8vNqzE"
            height={230}
            width={width}
          />
        </Content>
      </Modal>
    </Container>
  )
}

export default Maps
