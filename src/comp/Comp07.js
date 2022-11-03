import './comp.css';

function Comp07() {
    let elem1 = <span>elem1</span>;
    let elem2 = (
        <div style={{ display: "inline" }}>
            <span>one</span>
            <span>+</span>
            <span>two</span>
        </div>
    );
    let elem3 = (
        <>
            <span>one</span>
            <span>+</span>
            <span>two</span>
        </>
    );
    let attr = 'red_class';
    return (
        <div className="comp comp06">
            <h3><span>07</span>variable like html code</h3>
            <li>{elem1}</li>
            <li>{elem2}</li>
            <li>{elem3}</li>
            <li><span className={attr}>red text by className</span></li>
            <li><span id={attr}>red text by id</span></li>
            <li><input type="text" name={'text3'} />
                <label htmlFor="text3">label for text3</label>
            </li>
        </div>
    )
}

export default Comp07;