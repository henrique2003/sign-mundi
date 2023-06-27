import { useState, useEffect } from 'react'
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { type RouteProp } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  Container,
  Content,
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
  TextSubmitButton,
  Form,
  ErrorMessageText
} from './styles'
import { type RootStackParamList } from '../../../App'
import api from '../../services/api'
import { type ILocation } from '../../components'

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
  const [errorMessage, setErrorMessage] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [link, setLink] = useState('')
  const [lati, setLati] = useState('')
  const [long, setLong] = useState('')

  useEffect(() => {
    function handleInputValues(): void {
      const { location: { image, title, lati, link, long } } = params
      setTitle(title)
      setLink(link)
      setImage(image)
      setLati(lati)
      setLong(long)
    }

    handleInputValues()
  }, [])

  async function edit(): Promise<void | null> {
    try {
      const { data: { location } } = await api.put<{ location: ILocation }>(`/location/edit/${params.location._id}`, {
        title,
        image,
        link,
        lati,
        long
      })

      navigation.navigate('Admin', {
        location
      })
    } catch (error) {
      console.log(error)

      setErrorMessage('Erro na atualização')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <GoBack
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" color="rgba(0,0,0,0.7)" size={20} />
          <GoBackText>Voltar</GoBackText>
        </GoBack>
        <Content>
          <ImageContainer>
            <Image source={{ uri: params.location.image }} />
          </ImageContainer>
          <CountryText>{title}</CountryText>
          {errorMessage.length > 0 && <ErrorMessageText>{errorMessage}</ErrorMessageText>}
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
                  value={lati}
                  onChangeText={(e: string) => setLati(e)}
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
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default Country
