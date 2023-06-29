import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  flex: 1;
  background-color: white;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  padding-bottom: 0;
  margin-top: 10px;
`

export const LogOutButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
`

export const LogOutIcon = styled(Feather)`
  transform: rotateY(180deg);
`

export const LogOutText = styled(Feather)`
  font-size: 14px;
  text-transform: uppercase;
  color: rgba(0,0,0,0.7);
  font-family: 'Poppins_400Regular';
`

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const MapButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 50px;
`

export const CreateButton = styled.TouchableOpacity`
  background-color: rgba(0,0,0,0.7);
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
`

export const Line = styled.View`
  background-color: rgba(0,0,0,0.3);
  align-self: center;
  margin: 40px;
  margin-bottom: 30px;
  width: 100%;
  height: 1px;
`

export const CountrysText = styled.Text`
  font-size: 20px;
  color: rgba(0,0,0,0.7);
  font-family: 'Poppins_600SemiBold';
  margin-bottom: 10px;
  padding: 0 40px;
`

export const Countrys = styled.ScrollView`
  margin-top: 5px;
  max-height: 120px;
`
