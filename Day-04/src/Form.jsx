function handleSubmit(event){
    event.preventDefault();
    console.log("Form was Submitted!");
    console.log(event);
}

export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="write something" />
            <button>Submit</button>
        </form>
    );
};