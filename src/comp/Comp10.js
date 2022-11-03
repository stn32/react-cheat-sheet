import './comp.css';

function Comp10() {
    let age = 18;
    let more = 'more than 18 or equal 18';
    let less = 'less than 18';
    let show;

    if (age >= 18) {
        show = more;
    } else {
        show = less;
    }

    return (
        <div className="comp comp10">
            <h3><span>10</span>condition if else</h3>
            <li>{age}</li>
            <li>{show}</li>
        </div>
    )
}

export default Comp10;