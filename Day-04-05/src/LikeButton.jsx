export default function LikeButton() {
    
    let clicked = () => {
        d.style.color = "red";
    }
    return (
        <div className="d">
            <p onClick={clicked}>
                <i className="fa-regular fa-heart"></i>
            </p>
        </div>
    )
}