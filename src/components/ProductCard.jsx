import Button from "./Button"
function   ProductCard({ProductData}) {
    return (
        <div className='product-card'>
        <div className='product-card-header'>
            <img className="Profile-image"
             src={ProductData.image}
             alt={ProductData.name}
              />
            <h1>{ProductData.name}</h1>
            <p>{ProductData.price}</p>
         </div>
            <p className="product-card-description"> {ProductData.description}</p>
        <Button/>
        </div> 
    )
}
export default ProductCard;