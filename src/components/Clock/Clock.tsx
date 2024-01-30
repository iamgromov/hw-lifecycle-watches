import { useState, useEffect } from 'react';
import { DateTime } from "luxon";

import { ClockProps } from '../../interfaces/ClockProps';

import './clock-style.css';

export default function Clock(props: ClockProps) {    
  const { title, timeZone, id } = props.clock;
  const { removeClock } = props;
  let zoneToString = '';

  if(timeZone[0] === '-' || timeZone[0] === '+') {
    zoneToString = 'UTC' + timeZone;
  } else if(timeZone.length === 0) {
    zoneToString = 'system';
  } else {
    zoneToString = 'UTC+' + timeZone;
  }

  let [time, setTime] = useState(DateTime.fromObject({}, {zone: zoneToString}));
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTime(time = DateTime.fromObject({}, {zone: zoneToString}))
    }, 1000);

    return () => clearInterval(timeOut);
  }, [time])

  return (
    <div className='clock'>
      <h3 className="clock__title">{title}</h3>
      <button
        className="clock__close"
        onClick={() => removeClock()} 
        data-id={id}
      >❌</button>
      <div className="clock__wrapper">
        <div
          className="clock__hour"
          style={{transform: `rotate(${90 + (time.hour / 12 * 360) + time.minute / 12}deg)`}}
        ></div>
        <div
          className="clock__minute"
          style={{transform: `rotate(${time.minute / 60 * 360 + time.second / 60}deg)`}}
        ></div>
        <div
          className="clock__second"
          style={{transform: `rotate(${time.second / 60 * 360}deg)`}}
        ></div>
      </div>
    </div>
  )
}