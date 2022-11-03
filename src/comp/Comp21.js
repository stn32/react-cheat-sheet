import './comp.css';

function Comp21() {
    let productsArr = [
        { id: 11, name: 'product1', cost: 100 },
        { id: 12, name: 'product2', cost: 200 },
        { id: 13, name: 'product3', cost: 300 },
    ];
    let productList = productsArr.map(function (item) {
        return <li key={item.id}>{item.id} - {item.name} - {item.cost}</li>
    })

    return (
        <div className="comp comp21">
            <h3><span>21</span>array / map / key - id</h3>
            <div className='res'>{productList}</div>
        </div>
    )
}

export default Comp21;