import Boxes from './Boxes.jsx'

function Boxesbunch() {
    let styles = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    };

    return(
        <div style={styles}>
            <Boxes product="logictech MX Master" idx={0}/>
            <Boxes product="Apple Pencil (2nd Gen)" idx={1}/>
            <Boxes product="Zebronics" idx={2}/>
            <Boxes product="Petronics Toad" idx={3}/>
        </div>
    )
}

export default Boxesbunch;