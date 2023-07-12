import { Response } from './Response';
import { Message } from './Message';
import { Typing } from './Typing';

const typeMessages = {
  response: Response, 
  message: Message, 
  typing: Typing 
}

type TypeMessage = ('response' | 'message' | 'typing');
export type TFrom = {
  name: string;
}

export interface TMessage {
  id: string;
  from: TFrom;
  type: TypeMessage;
  time: string;
  text?: string;
}

export const MessageHistory = ({ list=[] }: { list: TMessage[] }) => {

  return (
    <>
      {
        list.length !== 0 
        ? <ul>
            {
              list.map((msg, idx) => {
                const Component = typeMessages[msg.type];
                return <Component from={msg.from} message={msg} key={idx}/>
              })
            }
          </ul> 
        : <></>
      }
    </>
  )
}
