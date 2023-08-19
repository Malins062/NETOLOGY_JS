import { UrlItem, ViewsItem } from './List'

export const Video = ({ url, views }: { url?: UrlItem; views: ViewsItem }) => {
  return (
    <div className='item item-video'>
      <iframe src={url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen></iframe>
      <p className='views'>Просмотров: {views}</p>
    </div>
  )
}
