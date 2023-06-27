import { type RouteProp } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  Container,
  CountryText,
  GoBack,
  GoBackText,
  Image,
  ImageContainer,
  Row,
  SubmitButton,
  TextInput,
  TextInputContainer,
  TextInputContainerFlex,
  TextSubmitButton
} from './styles'
import { Form } from '../Login/styles'
import { type RootStackParamList } from '../../../App'

type CountryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Country'>
type CountryScreenRouteProp = RouteProp<RootStackParamList, 'Country'>

interface Props {
  navigation: CountryScreenNavigationProp
  route: CountryScreenRouteProp
}

const Country: React.FC<Props> = ({
  navigation,
  route: { params }
}) => {
  // const [errorMessage, setErrorMessage] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [link, setLink] = useState('')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  useEffect(() => {
    function handleInputValues(): void {
      const { location: { image, title, lati, link, long } } = params
      setTitle(title)
      setLink(link)
      setImage(image)
      setLat(lati)
      setLong(long)
    }

    handleInputValues()
  }, [])

  async function edit(): Promise<void | null> {
    try {
      // if (username.trim().length === 0 || password.trim().length === 0) {
      //   setErrorMessage('Campo em branco')
      // }
    } catch (error) {

    }
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <GoBack
        activeOpacity={0.6}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" color="rgba(0,0,0,0.7)" size={20} />
        <GoBackText>Voltar</GoBackText>
      </GoBack>
      <ImageContainer>
        <Image source={{ uri: params.location.image }} />
      </ImageContainer>
      <CountryText>{title}</CountryText>
      <Form>
        <TextInputContainer>
          <TextInput
            placeholder="Nome"
            value={title}
            onChangeText={(e: string) => setTitle(e)}
          />
        </TextInputContainer>
        <TextInputContainer>
          <TextInput
            placeholder="Imagem"
            value={image}
            onChangeText={(e: string) => setImage(e)}
          />
        </TextInputContainer>
        <TextInputContainer>
          <TextInput
            placeholder="Link"
            value={link}
            onChangeText={(e: string) => setLink(e)}
          />
        </TextInputContainer>
        <Row>
          <TextInputContainerFlex>
            <TextInput
              placeholder="Latitude"
              value={lat}
              onChangeText={(e: string) => setLat(e)}
            />
          </TextInputContainerFlex>
          <TextInputContainerFlex>
            <TextInput
              placeholder="Longitude"
              value={long}
              onChangeText={(e: string) => setLong(e)}
            />
          </TextInputContainerFlex>
        </Row>
        <SubmitButton
          activeOpacity={0.6}
          onPress={async () => await edit()}
        >
          <TextSubmitButton>Salvar</TextSubmitButton>
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default Country
