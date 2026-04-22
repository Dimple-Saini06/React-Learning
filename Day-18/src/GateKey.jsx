export default function GateKey({unLock, currentState}){
    function keyUpdate() {
       unLock(!currentState);
    }
    return(
        <>
            <button onClick={keyUpdate}>Push to Unlock</button>
        </>
    )
}