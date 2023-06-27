import { Modal } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Close, Title, Content, Line, Container, Row } from './styles'
import ListItem from './ListItem'
import { type ILocation } from '../../../context/locations/types'

interface Props {
  locations: ILocation[]
  modalVisible: boolean
  handleCloseModal: () => void
  handleOpenVideo: (location: ILocation) => void
}

const ListModal: React.FC<Props> = ({
  locations,
  modalVisible,
  handleCloseModal,
  handleOpenVideo
}) => {
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
        <Container
          contentContainerStyle={{
            rowGap: 16
          }}
        >
          <Title>Lista de países</Title>
          <Line />
          <Row>
            {locations.length > 0 && locations.map((location, index) => (
              <ListItem
                key={index}
                item={location}
                handleOpenVideo={handleOpenVideo}
              />
            ))}
          </Row>
        </Container>
      </Content>
    </Modal>
  )
}

export default ListModal
