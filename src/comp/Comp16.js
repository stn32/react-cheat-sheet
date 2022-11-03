import './comp.css';

function Comp16() {

    function func(event) {
        let res = document.querySelector('.comp16 > .res')
        console.log(event); // get event
        console.log(event.target); // get button where been click
        res.innerHTML = event;
    }

    return (
        <div className="comp comp16">
            <h3><span>16</span>event / SyntheticEvent</h3>
            <button onClick={func}>PUSH</button>
            <div className='res'></div>
        </div>
    )
}

export default Comp16;