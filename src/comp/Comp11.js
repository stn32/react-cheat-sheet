import './comp.css';

function Comp11() {
    let age = 16;
    let more = 'more than 18 or equal 18';
    let less = 'less than 18';

    return (
        <div className="comp comp11">
            <h3><span>11</span>тернарный оператор</h3>
            {age} - {age > 18 ? more : less}
        </div>
    )
}

export default Comp11;