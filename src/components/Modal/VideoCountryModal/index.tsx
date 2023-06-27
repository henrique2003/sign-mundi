import { useWindowDimensions, Modal, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Close, Video, Title, Content } from './styles'
import { useState } from 'react'
import { type ILocation } from '../../../context/locations/types'

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

  const [videoReady, setVideoReady] = useState(false)

  const { width, height } = useWindowDimensions()

  function getVideoId(link: string): string {
    if (link.length === 0) return ''

    const [, part] = link.split('=')
    const [videoId] = part.split('&')

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
          height={videoReady ? height < width ? height / 1.3 : height / 2 : 0}
          width={width / 1 - 30}
          onReady={() => setVideoReady(true)}
        />
        {!videoReady && <ActivityIndicator color="rgba(0,0,0,0.8)" />}
      </Content>
    </Modal>
  )
}

export default VideoCountryModal
