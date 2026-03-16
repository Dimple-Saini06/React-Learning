import "./Product.css";

function Product({title, price, features, features2}) {
    const list = features.map((feature) => <li>{feature}</li>)
    return (
        <div className='Product'>
            <h3>{title} </h3>
            <h5>{price} </h5>
            {/* <h4>{features}</h4> */}
            <h4>{list}</h4>
            <p>{features2.b}</p>
            {price > 30000 && <p>"Discount of 5%"</p>}
        </div>
    );
}

export default Product;