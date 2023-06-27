import { type StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import { Platform, ActivityIndicator } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  Container,
  Content,
  ErrorMessageText,
  Form,
  GoBack,
  SubmitButton,
  Text,
  TextInput,
  TextSubmitButton,
  Title
} from './styles'
import { useAuth } from '../../context/hooks/auth'
import { type RootStackParamList } from '../../../App'

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>

interface Props {
  navigation: LoginScreenNavigationProp
}

const Login: React.FC<Props> = ({
  navigation
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const { signIn, isLogged, isSignIn } = useAuth()

  // redirecionamento caso estaja autenticado
  useEffect(() => {
    isLogged && navigation.navigate('Dasboard')

    setErrorMessage('')
  }, [])

  // login admin
  async function login(): Promise<void | null> {
    try {
      if (username.trim().length === 0 || password.trim().length === 0) {
        setErrorMessage('Campo em branco')
        return
      }

      await signIn(username, password)

      navigation.navigate('Dasboard')
      setErrorMessage('')
    } catch (error) {
      setErrorMessage('Usuário ou senha incorreto')
    }
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <GoBack
        activeOpacity={0.6}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" color="rgba(0,0,0,0.7)" size={20} />
        <Text>Voltar</Text>
      </GoBack>
      <Content>
        <Form>
          <Title>Login</Title>
          {errorMessage.length > 0 && (
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
          )}
          <TextInput
            placeholder="Usuario"
            value={username}
            onChangeText={(e: string) => setUsername(e)}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(e: string) => setPassword(e)}
          />
          <SubmitButton
            activeOpacity={0.7}
            onPress={async () => await login()}
          >
            {!isSignIn
              ? <TextSubmitButton>Entrar</TextSubmitButton>
              : (
                <ActivityIndicator color="rgba(255,255,255,0.8)" />
              )}
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  )
}

export default Login
