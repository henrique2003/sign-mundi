import styled from 'styled-components/native'
import { Image as ExpoImage } from 'expo-image'

export const Content = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: white;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

export const Image = styled(ExpoImage)`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`
