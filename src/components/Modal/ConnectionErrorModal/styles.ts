import YoutubeIframe from 'react-native-youtube-iframe'
import styled from 'styled-components/native'

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Face = styled.Text`
  font-size: 50px;
  color: rgba(0,0,0,0.8);
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Poppins_400Regular';
`

export const Title = styled.Text`
  font-size: 22px;
  color: rgba(0,0,0,0.8);
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Poppins_400Regular';
`

export const Video = styled(YoutubeIframe)``
