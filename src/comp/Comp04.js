import './comp.css';

function Comp04(props) {
    const str1 = 'text1';
    const str2 = 'text2';
    const str3 = 'random words';
    return (
        <div className="comp comp04">
            <h3><span>04</span>put var into different elements</h3>
            <p>{str1}</p>
            <p>{str2} and {str3}</p>
        </div>
    )
}

export default Comp04;