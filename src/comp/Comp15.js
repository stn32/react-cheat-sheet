import './comp.css';

function Comp15() {

    function show(name) {
        let res = document.querySelector('.comp15 > .res');
        res.innerHTML = ('hello, ' + name);
    }

    return (
        <div className="comp comp15">
            <h3><span>15</span>onClick передать имя через стрелочную функцию</h3>
            <button onClick={() => show('Sergio')}>Sergio</button>
            <button onClick={() => show('Jack')}>Jack</button>
            <button onClick={() => show('Jade')}>Jade</button>
            <div className='res'></div>
            <div className='res'></div>
        </div>
    )
}

export default Comp15;