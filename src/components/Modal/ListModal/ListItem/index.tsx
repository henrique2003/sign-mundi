import { type ILocation } from '../../../../context/locations/types'
import { Container, Image, ImageContainer, ImageContainerOverlay, Text } from './styles'

interface Props {
  item: ILocation
  handleOpenVideo: (location: ILocation) => void
}

const ListItem: React.FC<Props> = ({
  item,
  handleOpenVideo
}) => {
  const { image, title } = item

  return (
    <Container
      activeOpacity={0.7}
      onPress={() => handleOpenVideo(item)}
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

export default ListItem
