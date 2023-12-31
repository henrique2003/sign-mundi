import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic
} from '@expo-google-fonts/poppins'
import theme from './src/theme'
import { Maps, Login, Admin, Country, Create } from './src/screens'
import { AuthProvider } from './src/context/auth'
import { LocationProvider } from './src/context/locations'
import { type ILocation } from './src/context/locations/types'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Create: undefined
  Admin: undefined
  Country: { location: ILocation }
}

export default function App(): JSX.Element {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic
  })

  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded &&
        <AuthProvider>
          <LocationProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen name="Home" component={Maps} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Admin" component={Admin} />
                <Stack.Screen name="Country" component={Country} />
                <Stack.Screen name="Create" component={Create} />
              </Stack.Navigator>
            </NavigationContainer>
          </LocationProvider>
        </AuthProvider>}
      <StatusBar backgroundColor='transparent' translucent />
    </ThemeProvider>
  )
}
