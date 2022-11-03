import './comp.css';

function Comp20() {
    let products = [
        { name: 'product1', cost: '200' },
        { name: 'product2', cost: '300' },
        { name: 'product3', cost: '400' },
    ]
    let productsCover = products.map(function (item, index) {
        return <li key={index}>{item.name} - {item.cost}</li>
    })

    return (
        <div className="comp comp20">
            <h3><span>20</span>array / map / keys for items</h3>
            <div className='res'>{productsCover}</div>
        </div>
    )
}

export default Comp20;