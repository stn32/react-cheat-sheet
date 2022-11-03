import './comp.css';
import { useState } from 'react';

function Comp25() {

    let [name, setName] = useState('old name');
    let [cost, setCost] = useState('400');

    return (
        <div className="comp comp25">
            <h3><span>25</span>state / стейты / useState</h3>
            <button onClick={() => setName('new name')}>PUSH</button>
            <button onClick={() => setCost('350')}>PUSH</button>
            <div className='res'>
                <li>{name}</li>
                <li>{cost}</li>
            </div>
        </div>
    )
}

export default Comp25;