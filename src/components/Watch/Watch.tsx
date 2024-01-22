import { useState } from 'react';
import Clock from "../Clock/Clock";
import InputRow from "../InputRow/InputRow";
import { Time } from '../../interfaces/Time';
import './watch-style.css';

const Watch = () => {
  const [times, setTimes] = useState<Time[]>([{
    title: 'Москва',
    timeZone: 3
  }])
  
  return (
    <div className="watch">
      <h1 className='watch__title'>Мировое время</h1>
      <InputRow times={times} setTimes={setTimes} />
      <div className="watch__container">
        {
          times.map(item => <Clock
            key={item.title}
            title={item.title}
            timeZone={item.timeZone}
            times={times}
            setTimes={setTimes}
          />)
        }
      </div>
    </div>
  )
}

export default Watch