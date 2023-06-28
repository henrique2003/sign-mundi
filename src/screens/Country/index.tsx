import { useState, useEffect } from 'react'
import { Platform, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Alert } from 'react-native'
import { type RouteProp } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

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
  ErrorMessageText,
  DeleteButton
} from './styles'
import { type RootStackParamList } from '../../../App'
import api from '../../services/api'
import { useLocations } from '../../context/hooks/locations'
import { type ILocation } from '../../context/locations/types'

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
  const [isAlertVisible, setAlertVisible] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [link, setLink] = useState('')
  const [lati, setLati] = useState('')
  const [long, setLong] = useState('')

  const { editLoc, deleteLoc } = useLocations()

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

  async function edit(): Promise<void> {
    setLoadingStatus(true)
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data: { location } } = await api.put<{ location: ILocation }>(`/location/edit/${params.location._id}`, {
        title,
        image,
        link,
        lati,
        long
      })

      editLoc(location)

      navigation.navigate('Admin')
      setLoadingStatus(false)
    } catch (error) {
      setErrorMessage('Erro na atualização')
      setLoadingStatus(false)
    }
  }

  async function handleAlert(): Promise<void> {
    setAlertVisible(true)
  }

  async function destroy(): Promise<void> {
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await api.delete(`/location/${params.location._id}`)

      deleteLoc(params.location._id)

      navigation.navigate('Admin')
    } catch (error) {
      setErrorMessage('Erro ao deletar')
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
        <DeleteButton
          activeOpacity={0.6}
          onPress={async () => await handleAlert()}
        >
          <FontAwesome5 name="trash" size={20} color="red" />
        </DeleteButton>
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
        {isAlertVisible &&
          Alert.alert(
            'Deletar localização',
            'Você deseja aceitar ou rejeitar?',
            [
              {
                text: 'Aceitar',
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onPress: async (): Promise<void> => {
                  setAlertVisible(false)
                  await destroy()
                }
              },
              {
                text: 'Rejeitar',
                onPress: () => {
                  setAlertVisible(false)
                },
                style: 'cancel'
              }
            ],
            { cancelable: true }
          )
        }
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default Country
