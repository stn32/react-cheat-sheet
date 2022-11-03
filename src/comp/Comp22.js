import './comp.css';

function Comp22() {
    let productsArr = [
        { id: 11, name: 'product1', cost: 100 },
        { id: 12, name: 'product2', cost: 200 },
        { id: 13, name: 'product3', cost: 300 },
    ];
    let productTable = productsArr.map(function (item) {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.cost}</td>
            </tr>
        )
    })

    return (
        <div className="comp comp22">
            <h3><span>22</span>array / map / table</h3>
            <div className='res'>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>cost</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productTable}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Comp22;