function handleClick() {
    console.log("Hello");
}

function handleMouseOver() {
    console.log("bye!")
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem eius tenetur minus. Repellendus, molestiae minus ullam dolorum id magnam fuga cupiditate, eveniet quae veritatis libero nihil. Aut, ipsum hic!
            Ullam nam placeat veritatis nulla aliquam laboriosam deleniti quisquam, sit incidunt est. Repellat corporis illum adipisci doloremque eos rerum voluptate natus ipsum aspernatur provident veritatis, architecto voluptatum qui explicabo. Nulla.</p>
        </div>

    )
}