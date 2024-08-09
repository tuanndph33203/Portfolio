import { Heart, Image, SendHorizontal, X } from 'lucide-react';
import styled from 'styled-components';
import Logo from './Logo';
import { IPopup } from '@/common/interface/popup';
import { useContext, useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { IMessage } from '@/common/interface/message';
import { UserIdContext } from '@/context/UserContext';

const PopupOverlay = styled.div<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  position: fixed;
  z-index: 999;
  bottom: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 0 0.5rem 0.5rem 0.5rem;
  width: 350px;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fffdfd;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const CloseButton = styled(X)`
  cursor: pointer;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MessageContent = styled.div`
  width: 100%;
  height: 350px;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ToolContent = styled.div`
  height: 25px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 10px;
`;

const Input = styled.input`
  transition: width 3s ease-in-out;
  padding: 0.3rem 1rem;
  background-color: #f5f5f5;
  border-radius: 100rem;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
`;
const IconImage = styled.div<{ texting?: boolean; hidden?: boolean }>`
  cursor: pointer;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease-in-out;
  transform: ${({ texting }) =>
    texting ? 'translateX(-20px)' : 'translateX(0)'};
  opacity: ${({ texting }) => (texting ? 0 : 1)};
  pointer-events: ${({ texting }) => (texting ? 'none' : 'auto')};
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;
const SendContainer = styled.div`
  padding: 0 0.5rem;
  width: 40px;
`;
const HeartIcon = styled(Heart)<{ message?: string }>`
  transition: transform 0.3s ease-in-out;
  display: ${({ message }) => (message ? 'none' : 'block')};
  cursor: pointer;
`;
const SendIcon = styled(SendHorizontal)<{ message?: string }>`
  transition: transform 0.3s ease-in-out;
  display: ${({ message }) => (message ? 'block' : 'none')};
  cursor: pointer;
`;
const MessageWrapper = styled.div<{ isAdmin: boolean }>`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: ${({ isAdmin }) => (isAdmin ? 'start' : 'end')};
`;
const Message = styled.div<{ isAdmin: boolean }>`
  background-color: ${({ isAdmin }) => (isAdmin ? '#f0f0f0' : '#6201f4')};
  color: ${({ isAdmin }) => (isAdmin ? '#000000' : '#ffffff')};
  font-size: smaller;
  font-weight: 450;
  padding: 0.25rem 0.4rem;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  max-width: 75%;
`;
const LogoWrapper = styled.div<{ isAdmin: boolean }>`
  display: ${({ isAdmin }) => (isAdmin ? 'flex' : 'none')};
  margin-bottom: 0.5rem;
  justify-content: ${({ isAdmin }) => (isAdmin ? 'start' : 'end')};
  align-items: start;
`;
const MessagePopup = ({ onClose, visible }: IPopup) => {
  const userId: string = useContext(UserIdContext);
  const { mutate } = useMutation({
    mutationKey: ['message'],
    mutationFn: async () => {
      const response = await axios.post('http://localhost:3000/api/message', {
        userId,
        message,
      });
    },
  });
  const [texting, setTexting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    if (texting) {
      setHidden(true);
    } else {
      setTimeout(() => {
        setHidden(false);
      }, 500);
    }
  }, [texting]);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (message) {
      setMessages([
        ...messages,
        {
          messageId: Date.now().toString(),
          senderId: userId,
          text: message,
        },
      ]);
      setMessage('');
    }
  };
  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  return (
    <PopupOverlay visible={visible}>
      <PopupContainer>
        <PopupHeader>
          <TitleContainer>
            <Logo hidden />
            <Title>Nguyễn Đình Tuân</Title>
          </TitleContainer>
          <CloseButton onClick={onClose} />
        </PopupHeader>
        <PopupContent>
          <MessageContent>
            {messages &&
              messages.map((msg: IMessage) => (
                <MessageWrapper
                  key={msg.messageId}
                  isAdmin={msg.senderId === 'admin'}
                >
                  <LogoWrapper isAdmin={msg.senderId === 'admin'}>
                    <Logo size={30} hidden />
                  </LogoWrapper>
                  <Message
                    key={msg.messageId}
                    isAdmin={msg.senderId === 'admin'}
                  >
                    {msg.text}
                  </Message>
                  <div ref={messageEndRef} />
                </MessageWrapper>
              ))}
          </MessageContent>
          <ToolContent>
            <IconImage texting={texting} hidden={hidden}>
              <Image fill="#6201f4" color="white" size={30} />
            </IconImage>
            <Input
              onFocus={() => setTexting(true)}
              onBlur={() => setTexting(false)}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleEnter}
              value={message}
              type="text"
              placeholder="Type your message here..."
            />
            <SendContainer>
              <HeartIcon
                message={message}
                fill="#db3535"
                color="white"
                size={30}
              />
              <SendIcon
                onClick={sendMessage}
                message={message}
                fill="#6201f4"
                color="#6201f4"
              />
            </SendContainer>
          </ToolContent>
        </PopupContent>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default MessagePopup;
