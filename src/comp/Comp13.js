import './comp.css';

function Comp13() {
    function square(num) {
        return num ** 2;
    }
    function cube(num) {
        return num ** 3
    }
    function getDigitsSum(num) {
        let arr = num.toString().split('');
        return Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    }
    return (
        <div className="comp comp13">
            <h3><span>13</span>functions into functions / sum of digits / split</h3>
            <li><span>{square(3)} + {cube(2)}</span></li>
            <li>{square(3) + cube(2)}</li>
            <li>Sum of digits = {getDigitsSum(123)}</li>
        </div>
    )
}

export default Comp13;