import YoutubeIframe from 'react-native-youtube-iframe'
import styled from 'styled-components/native'

export const Content = styled.View`
  flex: 1;
  position: relative;
`

export const Close = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 2;
`

export const Title = styled.Text`
  font-size: 22px;
  color: rgba(0,0,0,0.8);
  font-family: 'Poppins_400Regular';
  text-align: center;
  margin-top: 130px;
`

export const Line = styled.View`
  background: #808080;
  margin: 40px auto;
  max-width: 300px;
  width: 100%;
  height: 1px;
`

export const Container = styled.ScrollView`
  width: 100%;
`

export const Row = styled.View`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

export const Video = styled(YoutubeIframe)``
