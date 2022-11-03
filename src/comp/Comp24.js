import './comp.css';
import uuid from 'react-uuid';

function Comp24() {
    let productArr = [
        { id: uuid(), name: 'product1', cost: 100 },
        { id: uuid(), name: 'product2', cost: 200 },
        { id: uuid(), name: 'product3', cost: 300 },
    ];

    let productId = productArr.map(function (item) {
        return (
            <li key={item.id}>
                <span>{item.id}</span> - <span>{item.name}</span> - <span>{item.cost}</span>
            </li>
        )
    })

    return (
        <div className="comp comp24">
            <h3><span>24</span>array / map / random key / uuid </h3>
            <div className='res'>
                {productId}
            </div>
        </div>
    )
}

export default Comp24;