import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
  padding: 0 20px;
`

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  gap: 5px;
  margin-top: 35px;
  align-items: center;
`

export const GoBackText = styled.Text`
  font-size: 14px;
  color: rgba(0,0,0,0.7);
  font-family: 'Poppins_600SemiBold';
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.View`
  width: 150px;
  height: 150px;
  padding: 5px;
  border-radius: 100px;
  background-color: rgba(0,0,0,0.2);
  align-self: center;
  justify-content: center;
  margin-top: -80px;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  object-fit: contain;
`

export const CountryText = styled.Text`
  font-size: 22px;
  color: rgba(0,0,0,0.7);
  font-family: 'Poppins_500Medium';
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
`

export const ErrorMessageText = styled.Text`
  font-size: 17px;
  color: red;
  font-family: 'Poppins_300Light';
  text-align: center;
  margin-bottom: 5px;
`

export const Form = styled.View`
  justify-content: center;
  width: 100%;
  max-width: 300px;
  align-self: center;
`

export const Row = styled.View`
  flex-direction: row;
  gap: 10px;
`

export const TextInputContainer = styled.View`
  height: 40px;
  background-color: rgba(0,0,0,0.3);
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 2px;
  margin-top: 10px;
`

export const TextInputContainerFlex = styled(TextInputContainer)`
  flex: 1;
`

export const TextInput = styled.TextInput`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  color: rgba(0,0,0,0.6);
  font-size: 15px;
  font-family: 'Poppins_400Regular';
  padding: 0 15px;
`

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 20px;
  height: 40px;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const TextSubmitButton = styled.Text`
  font-size: 15px;
  color: white;
  font-family: 'Poppins_500Medium';
  text-align: center;
`
