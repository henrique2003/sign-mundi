import { useState } from 'react'
import { Platform, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
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
import { validateAllInputs } from '../../utils/valid-empty-inputs'
import { useLocations } from '../../context/hooks/locations'
import { type ILocation } from '../../context/locations/types'

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Create'>

interface Props {
  navigation: CreateScreenNavigationProp
}

const Create: React.FC<Props> = ({
  navigation
}) => {
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [link, setLink] = useState('')
  const [lati, setLati] = useState('')
  const [long, setLong] = useState('')

  const { createNewLoc } = useLocations()

  async function edit(): Promise<void | null> {
    setLoadingStatus(true)
    try {
      if (!validateAllInputs([
        title,
        image,
        link,
        lati,
        long
      ])) {
        setErrorMessage('Campo em branco')
        return
      }

      const { data: { location } } = await api.post<{ location: ILocation }>('/location/create', {
        title,
        image,
        link,
        lati,
        long
      })

      createNewLoc(location)

      navigation.navigate('Admin')
      setLoadingStatus(false)
    } catch (error) {
      setLoadingStatus(false)
      setErrorMessage('Erro ao criar')
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
            <Image source={image.length > 0 ? { uri: image } : require('../../assets/default-country.png')} />
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
              disabled={loadingStatus}
              onPress={async () => await edit()}
            >
              {!loadingStatus
                ? (
                  <TextSubmitButton>Salvar</TextSubmitButton>
                )
                : (
                  <ActivityIndicator color="rgba(255,255,255,0.8)" />
                )}
            </SubmitButton>
          </Form>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default Create
