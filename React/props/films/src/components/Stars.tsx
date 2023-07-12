import Star from './Star';
import './Stars.css'

interface Props {
  count: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Stars = ({ count=0 }: Props) => {

  return (
    <>
        {
          count 
          ? <ul className='card-body-stars u-clearfix'>
              {[...Array(count)].map((_, index) => <Star id={index} key={index}/>)}
            </ul> 
          : <></>
        }
    </>
  )
}

export default Stars;
