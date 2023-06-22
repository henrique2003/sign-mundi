import MapView from 'react-native-maps'
import YoutubeIframe from 'react-native-youtube-iframe'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const MapContainer = styled(MapView)`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Close = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50px;
  right: 20px;
`

export const Title = styled.Text`
  font-size: 22px;
  color: rgba(0,0,0,0.8);
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Poppins_600SemiBold';
`

export const Video = styled(YoutubeIframe)``
