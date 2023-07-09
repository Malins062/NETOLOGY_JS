import ShopCard from './ShopCard';

export const CardsView = ({ cards }) => {
    return (
        <>
            <div className='container'>
                {
                    cards.map((card, index) => (
                        <ShopCard 
                            key={index}
                            name={card.name}
                            image={card.img}
                            color={card.color}
                            price={card.price}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default CardsView;
