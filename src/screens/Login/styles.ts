import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  gap: 5px;
  margin-top: 35px;
  margin-left: 20px;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 14px;
  color: rgba(0,0,0,0.7);
  font-family: 'Poppins_600SemiBold';
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Form = styled.View`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  margin-top: -50px;
`

export const Title = styled.Text`
  font-size: 25px;
  color: rgba(0,0,0,0.8);
  font-family: 'Poppins_600SemiBold';
  text-align: center;
  margin-bottom: 20px;
`

export const ErrorMessageText = styled.Text`
  font-size: 17px;
  color: red;
  font-family: 'Poppins_300Light';
  text-align: center;
  margin-bottom: 5px;
`

export const TextInput = styled.TextInput`
  margin-top: 20px;
  height: 55px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  color: rgba(0,0,0,0.8);
  font-size: 16px;
  font-family: 'Poppins_400Regular';
  padding: 0 20px;
`

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 30px;
  height: 55px;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const TextSubmitButton = styled.Text`
  font-size: 16px;
  color: white;
  font-family: 'Poppins_600SemiBold';
  text-align: center;
`
