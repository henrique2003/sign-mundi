import MapView from 'react-native-maps'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const MapContainer = styled(MapView)`
  flex: 1;
`

export const ListButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 2;
`
