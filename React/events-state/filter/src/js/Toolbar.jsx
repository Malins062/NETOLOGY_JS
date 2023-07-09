export const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
        <>
            <nav>
                {
                    filters.map((item) => (
                        <ul key={item} 
                            className={item === selected ? 'active' : null}
                            onClick={() => onSelectFilter(item)}
                        >
                            {item}
                        </ul>
                    ))

                }
            </nav>
        </>
    )
}

export default Toolbar;
