import './comp.css';

function Comp08(props) {
    let text1;
    let text2;
    let text3;
    let show = true;

    if (show) {
        text1 = 'string 1';
    } else {
        text1 = 'string 2';
    }

    if (show) {
        text2 = <span>string 1 one</span>;
    } else {
        text2 = <span>string 2 two</span>;
    }

    if (show) {
        text3 = <span>random text 3</span>;
    }

    return (
        <div className="comp comp08">
            <h3><span>08</span>condition for variable - true/false</h3>
            <li>{text1}</li>
            <li>{text2}</li>
            <li>{text3}</li>
        </div>
    )
}

export default Comp08;