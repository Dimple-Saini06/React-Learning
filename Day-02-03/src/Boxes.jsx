import "./Boxes.css"
import Prices from './Prices.jsx'

function Boxes({product, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999","9,199", "899", "278"];
    let description = [
        ["8000 DPI", "5 Programmable buttons"],
        ["intitutive surface", "designed for iPad Pro"], 
        ["designed for iPad Pro", "intitutive surface"], 
        ["Wireless", "optical orientation"]
    ]
    return(
        <div className="styling">
            <h2>{product}</h2>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Prices oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Boxes;