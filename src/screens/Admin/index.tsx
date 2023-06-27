import { type StackNavigationProp } from '@react-navigation/stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useEffect, useState } from 'react'

// import { useAuth } from '../../context/hooks/auth'
import api from '../../services/api'
import { LocalItem, type ILocation } from '../../components'
import {
  Actions,
  Container,
  Countrys,
  CountrysText,
  Header,
  Line,
  LogOutButton,
  LogOutIcon,
  LogOutText,
  MapButton,
  UserIcon
} from './styles'
import { type RootStackParamList } from '../../../App'

type AdminScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Country'>

interface Props {
  navigation: AdminScreenNavigationProp
}

const Admin: React.FC<Props> = ({
  navigation
}) => {
  const [locations, setLocations] = useState<ILocation[]>([])

  // const { signOut } = useAuth()

  useEffect(() => {
    async function loadLocations(): Promise<void> {
      try {
        const { data } = await api.get('/locations')

        setLocations(data.locations)
      } catch (error) {
      }
    }

    void loadLocations()
  }, [])

  async function handleSignOut(): Promise<void> {
    navigation.navigate('Home')
    // await signOut()
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
          <UserIcon>
            <FontAwesome5 name="user" solid color="white" size={16} />
          </UserIcon>
        </Actions>
      </Header>
      <Line />
      <CountrysText>Países cadastrados</CountrysText>
      <Countrys
        horizontal
        alwaysBounceHorizontal
        contentContainerStyle={{
          gap: 15
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