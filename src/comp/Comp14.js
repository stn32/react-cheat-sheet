import './comp.css';

function Comp14() {

    function one() {
        let res = document.querySelector('.comp14 > .res');
        res.innerHTML = "hello";
    }
    function two() {
        let res = document.querySelector('.comp14 > .res');
        res.innerHTML = "again";
    }

    return (
        <div className="comp comp14">
            <h3><span>14</span>get text by onClick</h3>
            <button onClick={one}>PUSH1</button>
            <button onClick={two}>PUSH2</button>
            <div className='res'></div>
        </div>
    )
}

export default Comp14;