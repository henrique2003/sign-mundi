import Ionicons from 'react-native-vector-icons/Ionicons'

import { Container, Content, Form, GoBack, SubmitButton, Text, TextInput, TextSubmitButton, Title } from './styles'

interface Props {
  navigation: {
    goBack: () => void
  }
}

const Login: React.FC<Props> = ({
  navigation
}) => {
  return (
    <Container>
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
          <TextInput
            placeholder="Usuario"
          />
          <TextInput
            placeholder="Senha"
          />
          <SubmitButton>
            <TextSubmitButton>Entrar</TextSubmitButton>
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  )
}

export default Login
