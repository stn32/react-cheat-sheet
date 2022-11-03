import './comp.css';

function Comp09(props) {
    let isAdmin = true;
    let content;

    if (isAdmin) {
        content = <span>Active</span>;
    } else {
        content = <span>No Active</span>
    }

    return (
        <div className="comp comp08">
            <h3><span>09</span>condition for variable - true/false</h3>
            <li>{content}</li>
        </div>
    )
}

export default Comp09;