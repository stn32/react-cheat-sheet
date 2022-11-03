import './comp.css';
import uuid from 'react-uuid';

function Comp23() {
    let productsArr = ['apple', 'melon', 'orange'];
    let proList = productsArr.map(function (item) {
        return (
            <li key={uuid()}>{uuid()} - {item}</li>
        )
    })

    return (
        <div className="comp comp23">
            <h3><span>23</span>array / map / random key / uuid </h3>
            <div className='res'>
                {proList}
            </div>
        </div>
    )
}

export default Comp23;