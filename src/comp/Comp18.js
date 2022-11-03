import './comp.css';

function Comp18() {
    let arr2 = [
        <span>1</span>,
        <span>2</span>,
        <span>3</span>,
    ];

    let arr3 = arr2.map(function (item, index) { // add key for each elem
        return <span key={index}>key - {index}, item - {item}; </span>
    })

    return (
        <div className="comp comp18">
            <h3><span>18</span>render elems from array</h3>
            <div>
                <ul>
                    {arr3}
                </ul>
            </div>
        </div>
    )
}

export default Comp18;