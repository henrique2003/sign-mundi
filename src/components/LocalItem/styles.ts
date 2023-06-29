import styled from 'styled-components/native'
import { Image as ExpoImage } from 'expo-image'

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.1);
  padding: 10px 20px;
  width: 130px;
`

export const ImageContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: rgba(0,0,0,0.3);
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const ImageContainerOverlay = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background: white;
  justify-content: center;
  align-items: center;
`

export const Image = styled(ExpoImage)`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  object-fit: contain;
`

export const Text = styled.Text`
  font-size: 16px;
  color: rgba(0,0,0,0.6);
  text-align: center;
  font-family: 'Poppins_400Regular';
`
