import { Modal, ActivityIndicator } from 'react-native'

import { Title, Content, Face } from './styles'

interface Props {
  connectionStatus: boolean
  loadStatus: boolean
  modalVisible: boolean
  handleCloseModal: () => void
}

const ConnectionErrorModal: React.FC<Props> = ({
  modalVisible,
  connectionStatus,
  loadStatus,
  handleCloseModal
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => handleCloseModal()}>
      <Content>
        {!loadStatus && !connectionStatus && (
          <>
            <Face>:(</Face>
            <Title>Algo deu errado! Verifique sua conexão com a internet</Title>
          </>
        )}
        {loadStatus && <ActivityIndicator color="rgba(0,0,0,0.8)" />}
      </Content>
    </Modal>
  )
}

export default ConnectionErrorModal
