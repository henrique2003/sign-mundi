import { type ILocation } from '../../../MapMarker'
import { Container, Image, ImageContainer, Text } from './styles'

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
        <Image source={{ uri: image }} />
      </ImageContainer>
      <Text>{title}</Text>
    </Container>
  )
}

export default ListItem
