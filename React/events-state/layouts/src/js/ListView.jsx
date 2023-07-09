import ShopItem from './ShopItem';

export const ListView = ({ items }) => {
    return (
        <>
            <div className='container-list'>
                {
                    items.map((item, index) => (
                        <ShopItem 
                            key={index}
                            name={item.name}
                            image={item.img}
                            color={item.color}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ListView;
