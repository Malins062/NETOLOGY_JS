import { TitleItem, ViewsItem } from './List';

export const Article = ({ title, views }: { title?: TitleItem; views: ViewsItem }) => {
  return (
    <div className='item item-article'>
        <h3><a href='#'>{title}</a></h3>
        <p className='views'>Прочтений: {views}</p>
    </div>
  )
}
