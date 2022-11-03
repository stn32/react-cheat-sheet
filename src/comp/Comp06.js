import './comp.css';

function Comp06(props) {
    const arr1 = [1, 2, 3];
    const obj1 = { a: 10, b: 20, c: 30 }
    const obj2 = { name: 'don', surname: 'jonson' };
    return (
        <div className="comp comp06">
            <h3><span>06</span>add elems from array and object</h3>
            <div>
                <p>result of arr1:</p>
                <li>{arr1[0]}</li>
                <li>{arr1[1]}</li>
                <li>{arr1[2]}</li>
            </div>
            <div>
                <p>result of obj1:</p>
                <li>{obj1.a}</li>
                <li>{obj1.b}</li>
                <li>{obj1.c}</li>
            </div>
            <div>
                <p>result of obj2</p>
                <li>name: {obj2.name}</li>
                <li>surname: {obj2.surname}</li>
            </div>
        </div>
    )
}

export default Comp06;