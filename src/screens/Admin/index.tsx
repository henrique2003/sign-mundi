import { useEffect } from 'react'
import { type StackNavigationProp } from '@react-navigation/stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useAuth } from '../../context/hooks/auth'
import { LocalItem } from '../../components'
import {
  Actions,
  Container,
  Countrys,
  CountrysText,
  CreateButton,
  Header,
  Line,
  LogOutButton,
  LogOutIcon,
  LogOutText,
  MapButton
} from './styles'
import { type RootStackParamList } from '../../../App'
import { useLocations } from '../../context/hooks/locations'

type AdminScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Country'>

interface Props {
  navigation: AdminScreenNavigationProp
}

const Admin: React.FC<Props> = ({
  navigation
}) => {
  const { signOut } = useAuth()
  const { locations, loadLocations } = useLocations()

  useEffect(() => {
    void loadLocations()
  }, [])

  async function handleSignOut(): Promise<void> {
    navigation.navigate('Home')
    await signOut()
  }

  return (
    <Container>
      <Header>
        <LogOutButton
          activeOpacity={0.8}
          onPress={async () => await handleSignOut()}
        >
          <LogOutIcon name="log-out" size={18} color="rgba(0,0,0,0.7)" />
          <LogOutText>Sair</LogOutText>
        </LogOutButton>
        <Actions>
          <MapButton
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Home')}
          >
            <FontAwesome5 name="map-pin" solid color="rgba(0,0,0,0.7)" size={16} />
          </MapButton>
          <CreateButton
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Create')}
          >
            <MaterialCommunityIcons name="map-marker-plus" color="white" size={16} />
          </CreateButton>
        </Actions>
      </Header>
      <Line />
      <CountrysText>Países cadastrados</CountrysText>
      <Countrys
        horizontal
        alwaysBounceHorizontal
        contentContainerStyle={{
          gap: 15,
          paddingRight: 60,
          paddingLeft: 40
        }}
        showsHorizontalScrollIndicator={false}
      >
        {locations.length > 0 && locations.map((location) => (
          <LocalItem
            key={location._id}
            item={location}
            navigation={navigation}
          />
        ))}
      </Countrys>
    </Container>
  )
}

export default Admin
