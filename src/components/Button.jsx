
export default function Button() {
    function handleClick() {
        console.log("You Buy The Product");
    }
    return (
        <button onClick={handleClick}>
        Buy Now
        </button>
    );
}