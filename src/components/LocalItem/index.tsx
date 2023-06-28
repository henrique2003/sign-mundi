import { type ILocation } from '../../context/locations/types'
import { Container, Image, ImageContainer, ImageContainerOverlay, Text } from './styles'

interface Props {
  item: ILocation
  navigation: {
    navigate: (route: string, params: { location: ILocation }) => void
  }
}

const LocalItem: React.FC<Props> = ({
  item,
  navigation
}) => {
  const { title, image } = item

  return (
    <Container
      activeOpacity={0.7}
      onPress={() => navigation.navigate('Country', {
        location: item
      })}
    >
      <ImageContainer>
        <ImageContainerOverlay>
          <Image source={image} contentFit="contain" />
        </ImageContainerOverlay>
      </ImageContainer>
      <Text>{title}</Text>
    </Container>
  )
}

export default LocalItem
