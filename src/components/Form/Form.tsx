import { useState } from 'react';

import { ClockType } from '../../types/ClockType';
import Clock from '../Clock/Clock';

import './form-style.css';

export default function Form() {
    let [title, setTitle] = useState('');
    let [timeZone, setTimeZone] = useState('');
    let [clocks, setClocks] = useState<ClockType[]>([{title: 'Местное время', timeZone: '', id: '1'}]);

    const onSubmitHandler = (title: string, timeZone: string):void => {
        event?.preventDefault();
        const id = String(title) + String(new Date);
        if(+timeZone < -11) timeZone = '-11';
        if(+timeZone > 14) timeZone = '14';
        const data = { title, timeZone, id };
        if(data.title.length === 0) return;
        setClocks(clocks = [...clocks, data]);
        setTitle(title = '');
        setTimeZone(timeZone = '');
    }

    const removeClock = () => {
        const clockId= event?.target?.getAttribute('data-id');
        const newClcocks = clocks.filter(el => el.id !== clockId);
        setClocks(clocks = [...newClcocks]);
    }

    return (
        <div className="watch">
            <h1 className='watch__title'>Мировое время</h1>
            <form 
                className="input-row" 
                onSubmit={() => onSubmitHandler(title, timeZone)}>
                <label>
                    <span>Название</span>
                    <input
                        type="text"
                        className="input-row__input"
                        required
                        value={title}
                        placeholder="Москва"
                        onChange={(event: any) => setTitle(title = event.target.value)}
                    />
                </label>
                <label>
                    <span>Временная зона</span>
                    <input 
                        type="text"
                        className="input-row__input"
                        required
                        value={timeZone} 
                        placeholder="+-00:00"
                        onChange={(event: any) => setTimeZone(timeZone = event.target.value)}
                    />
                </label>
                <button className="submit">Добавить</button>
            </form>
            <div className="watch__container">
                { clocks.map(clock => <Clock 
                    clock={clock} 
                    removeClock={removeClock} 
                    key={clock.id}
                    />) 
                }
            </div>
        </div>
    )
}