import { User } from '../App';
import { Loading } from './Loading';
import { usePollingDetails } from './hooks/usePollingDetails';

export const Details = ({url, info}: {url: string, info: User}) => {

  const userUrl = `${url}${info.id}.json`;
  const [{data, isLoading, hasError}] = usePollingDetails(userUrl);

  // console.log(`Details: ${url} ${isLoading}, ${hasError}`);
  // console.log(data);
  if (hasError) {
    console.log(`Error fetch for component DETAILS url: ${userUrl}`);
    console.error(hasError);
  }

  return (
    <>
      {isLoading && <Loading />}

      <div className='card'>
        <img src={data.avatar} className='card-img-top' alt='Avatar'></img>
        
        <div className='card-body'>
          <h5 className='card-title'>{data.name}</h5>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>City: {data.details.city}</li>
            <li className='list-group-item'>Company: {data.details.company}</li>
            <li className='list-group-item'>Position: {data.details.position}</li>
          </ul>
        </div>

      </div>
    </>
  )
}
