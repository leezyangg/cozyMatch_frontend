/* eslint-disable react/prop-types */
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('73a50589-82b3-4cca-bc0b-b0b2dc859a72', props.user.username, props.user.secret)
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height:'100%' }} />
    </div>
  )
};
export default ChatsPage;