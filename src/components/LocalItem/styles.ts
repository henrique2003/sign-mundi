import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.1);
  padding: 10px 20px;
  max-width: 100px;
  min-width: 100px;
  width: 100%;
`

export const ImageContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: rgba(0,0,0,0.3);
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  object-fit: contain;
`

export const Text = styled.Text`
  font-size: 17px;
  color: rgba(0,0,0,0.6);
  font-family: 'Poppins_400Regular';
`
