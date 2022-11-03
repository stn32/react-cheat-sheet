import './comp.css';

function Comp17() {

    function func(arg, arg2, event) {
        let res = document.querySelector('.comp17 > .res')
        console.log(arg, arg2, event);
        res.innerHTML = arg + ' ' + arg2;
    }

    return (
        <div className="comp comp17">
            <h3><span>17</span>event / many params into function</h3>
            <button onClick={event => func('hello', 'man', event)}>PUSH</button>
            <div className='res'></div>
        </div >
    )
}

export default Comp17;