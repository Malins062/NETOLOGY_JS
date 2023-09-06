import { PostData } from './Post'

const ItemPost = ({ data }: { data: PostData }) => {
  return (
    <div className='card-post card' key={data.id}>

      <div className='card-header d-flex justify-content-end align-items-center'>
        <span className='badge bg-secondary'>{data.created}</span>
      </div>      

      <div className='card-body'>
        <p className='card-text'>{data.content}</p>
      </div>
    
    </div>
  )
}

export default ItemPost;
