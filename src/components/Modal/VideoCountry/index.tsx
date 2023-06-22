import { useWindowDimensions, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Close, Video, Title, Content } from './styles'
import { type ILocation } from '../../MapMarker'

interface Props {
  location: ILocation
  modalVisible: boolean
  handleCloseModal: () => void
}

const VideoCountryModal: React.FC<Props> = ({
  location,
  modalVisible,
  handleCloseModal
}) => {
  const { title, link } = location

  const { width } = useWindowDimensions()

  function getVideoId(link: string): string {
    const [, part] = link.split('=')
    const [videoId] = part.split('&')

    console.log(videoId)

    return videoId
  }

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => handleCloseModal()}>
      <Content>
        <Close
          onPress={() => handleCloseModal()}
        >
          <Icon size={30} color="rgba(0,0,0,0.8)" name="close" />
        </Close>
        <Title>{title}</Title>
        <Video
          videoId={getVideoId(link)}
          height={230}
          width={width}
        />
      </Content>
    </Modal>
  )
}

export default VideoCountryModal
