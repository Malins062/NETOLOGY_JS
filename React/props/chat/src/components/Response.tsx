import { TFrom, TMessage } from './MessageHistory'

export const Response = ({ from, message }: { from: TFrom, message: TMessage }) => {
  return (
    <li className='clearfix' key={message.id}>
      <div className='message-data'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i> {from.name}</span>
        <span className='message-data-time'>{message.time}</span>
      </div>
      <div className='message other-message float-right'>{message.text}</div>  
    </li>
  )
}
