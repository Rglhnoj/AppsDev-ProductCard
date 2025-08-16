
export default function Button({ productData }) {
    function handleClick() {
        console.log(`You Buy The Product ${productData.name} Successfully`);
    }

    return (
        <button className="cmp-button" onClick={handleClick}>
            Buy Now
        </button>
    );
}
