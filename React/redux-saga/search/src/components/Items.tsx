import { Item } from '../redux/reducers/searchSlice';

export const Items = ({ data }: { data: Item[]}) => {
  return (
    <>
      { data && data.length > 0 &&
        <ul className='list-group body'>
          {data.map((item) => <li className='list-group-item list-group-item-warning' key={item.id}>{item.name}</li>)}
        </ul>
      }
    </>
  )
}
