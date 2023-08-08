import { useEffect, useState } from 'react';
import { TWatches } from '../Watches';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import './Clock.css';

interface TTransformStyle {
    transform: string;
}

export const Clock = ({ data, onRemove }: { data: TWatches, onRemove: (event: React.MouseEvent<HTMLOrSVGElement>) => void }) => {
    dayjs.extend(utc);
    const getNowTime = () => dayjs().utcOffset(data.offset);
    const [time, setTime] = useState(getNowTime());

    const second = time.second(),
      secondDeg = ((second / 60) * 360) + 360,
      styleSecond: TTransformStyle = { transform: `rotate(${secondDeg}deg)`, };
    
    const minute = time.minute(),
      minuteDeg = ((minute / 60) * 360), 
      styleMimnute: TTransformStyle = { transform: `rotate(${minuteDeg}deg)`, };

    const hour = time.hour(),
      hourDeg = ((hour / 12 ) * 360 ), 
      styleHour: TTransformStyle = { transform: `rotate(${hourDeg}deg)`, };
    
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(getNowTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
  return (
    <div className='card' key={data.id}>
        <div className='card-body'>
            <h5 className='card-title d-flex justify-content-between'>
              {data.title}
              <button 
                type='button' 
                className='btn-close' 
                title='Удалить часы'
                data-id={data.id}
                onClick={onRemove}
              >
              </button>
            </h5>
            <h6 className='card-subtitle text-muted'>{`UTC (${data.offset})`}</h6>
            <div className='clock'>
                <div className='hourHand' style={styleHour}></div>
                <div className='minuteHand' style={styleMimnute}></div>
                <div className='secondHand' style={styleSecond}></div>
                <div className='center'></div>
                <div className='time'>
                    <span>
                        <strong>{hour.toLocaleString(undefined, { minimumIntegerDigits: 2 })}</strong>:
                        {minute.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:
                        <small>{second.toLocaleString(undefined, { minimumIntegerDigits: 2 })}</small>
                    </span>
                </div>
                <ul>
                    <li><span>1</span></li>
                    <li><span>2</span></li>
                    <li><span>3</span></li>
                    <li><span>4</span></li>
                    <li><span>5</span></li>
                    <li><span>6</span></li>
                    <li><span>7</span></li>
                    <li><span>8</span></li>
                    <li><span>9</span></li>
                    <li><span>10</span></li>
                    <li><span>11</span></li>
                    <li><span>12</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Clock;
