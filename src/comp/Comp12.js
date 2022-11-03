import './comp.css';

function Comp12() {
    let show = true;

    return (
        <div className="comp comp12">
            <h3><span>12</span>&& operator</h3>
            <li>{String(show)}</li>
            <li>{show && <span>you authorized</span>}</li>
            <li>{!show && <span>you are not authorized</span>}</li>
        </div>
    )
}

export default Comp12;