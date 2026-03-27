import { useState } from "react";

function init(){
    console.log("function init");
    return 0;
}
export default function Counter(){
    let [count, setCounter] = useState(init);
    console.log(`outside, ${count}`);

    function inCount() {
        setCounter((count)=>{
            return count+1;
        });
        // setCounter((count)=>{
        //     return count+1;
        // });
        // console.log(`inside, ${count}`);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Click me</button>
        </div>
    )


}