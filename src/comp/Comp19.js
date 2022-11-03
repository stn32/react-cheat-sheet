import './comp.css';

function Comp19() {
    let arr1 = [];
    for (let i = 0; i < 4; i++) {
        arr1.push(<span key={i}>{i}</span>); // add key for each elem
    }

    let arr2 = [1, 2, 3, 4, 5];
    let res2 = arr2.map(function (item, index) {
        return <span key={index}>key - {index}, item - {item}; </span> // add key for each elem
    })

    return (
        <div className="comp comp19">
            <h3><span>19</span>array / map / key of elems in map</h3>
            <div>{arr1}</div>
            <div><b>array:</b> {arr2}</div>
            <div><b>method map:</b> {res2}</div>
        </div>
    )
}

export default Comp19;