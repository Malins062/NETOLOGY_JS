export const ShopCard = ({ name, color, price, image }) => {
    return (
        <>
            <div
                key={image}
                className='card-container'
                style={{ backgroundImage: `url('${image}')`}}
            >
                <div className='title'>{name}</div>
                <div className='color'>{color}</div>
                <div className='add-bucket'>
                    <div className='price'>$ {price}</div>
                    <div className='bth'>Add to cart</div>
                </div>
            </div>
        </>
    )
}

export default ShopCard;
