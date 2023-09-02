import { Loading } from './Loading';
import { usePolling } from './hooks/usePolling';

export const List = ({url, interval, onClick}: 
    {url: string, interval: number, onClick: (event: React.MouseEvent<HTMLElement>) => void}) => {

    const [{data, isLoading, hasError}] = usePolling(url, interval, []);
    // console.log(`List: ${url}, ${interval}, ${isLoading}, ${hasError}`);
    if (hasError) {
        console.log(`Error fetch for component LIST url: ${url}`);
        console.error(hasError);
      }
    
    return (
        <>
            {isLoading && <Loading />}
            <ul className='list-group'>
                {
                    data.map(item => 
                        <li 
                            className='list-group-item list-item-user' 
                            key={item.id}
                            data-id={item.id}
                            onClick={onClick}
                        >
                            {item.name}
                        </li>)
                }
            </ul>
        </>
    )
}
