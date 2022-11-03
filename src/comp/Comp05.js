import './comp.css';

function Comp05(props) {
    const num1 = 3;
    const num2 = 3;
    const num3 = 16;
    const str1 = 'the';
    const str2 = 'book';
    return (
        <div className="comp comp05">
            <h3><span>05</span>implement js into html tags (result of degree)</h3>
            <div>
                <li>result of degree: {num1} ** {num2} = {num1 ** num2}</li>
                <li>result of Math.sqrt т.е. 'квадратный корень' из {num3} = {Math.sqrt(num3)}</li>
                <li>result of str: {str1} + {str2} = {str1 + ' ' + str2}</li>
                <li>result of str: {str1} + {str2} = {str1 + ' ' + str2}</li>
            </div>
        </div>
    )
}

export default Comp05;