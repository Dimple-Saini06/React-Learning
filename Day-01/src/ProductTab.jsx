import Product from "./Product.jsx";

function ProductTab() {
    // const features = [<li>"hi-tech"</li>, <li>"durability"</li>, <li>"fast"</li>]; 
    const features = ["hi-tech","durability","fast"];
    const features2 = {a : "hi-tech", b:"durability", c:"fast"};
    return (
        <div>
            <Product title="LapTop" price={40000} features={features} features2={features2}/>
            <Product title="iPhone" price={10000} features={features} features2={features2}/>
            <Product title="Tablet" price={50000} features={features} features2={{a:"durability", b:"hi-tech"}}/>
            <Product title="Phone"  price={30000} features={features} features2={features2} />
        </div>
    );
}

export default ProductTab;