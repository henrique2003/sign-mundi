import styled from 'styled-components/native'
import { Image as ExpoImage } from 'expo-image'

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  gap: 5px;
  max-width: 100px;
`

export const ImageContainer = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background: rgba(0,0,0,0.3);
  justify-content: center;
  align-items: center;
`

export const ImageContainerOverlay = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: white;
  justify-content: center;
  align-items: center;
`

export const Image = styled(ExpoImage)`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`

export const Text = styled.Text`
  font-size: 17px;
  color: rgba(0,0,0,0.6);
  font-family: 'Poppins_400Regular';
`
