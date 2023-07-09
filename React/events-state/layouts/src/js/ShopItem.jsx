export const ShopItem = ({ name, color, price, image }) => {
    return (
        <>
            <div
                key={image}
                className='card-container-list'
            >
                <div className='image-list'>
                    <img src={image} alt='image card' />
                </div>
                <div className='title-list'>{name}</div>
                <div className='color-list'>{color}</div>
                <div className='add-bucket-list'>
                    <div className='price-list'>$ {price}</div>
                    <div className='bth'>Add to cart</div>
                </div>
            </div>
        </>
    )
}

export default ShopItem;
