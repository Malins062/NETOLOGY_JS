import Image from './Image';

interface TNewsNames {
  name: string;
  src: string;
}

/**
 * Rendering news content with navigation and current date&time
 * 
 * @namespace News
 * 
 * @param {Array<string>} newsCategories - List of news categories
 * @param {TNewsNames[]} newsNames - List of news names 
 * @param {string} newsNames.name - Name of new 
 * @param {string} newsNames.src - Icon for new 
 */
export default function News({ newsCategories, newsNames }: 
  { newsCategories: Array<string>; newsNames: Array<TNewsNames> }) {
  return (
    <div className='news'>
      <nav className='news-nav'>
        <ul className='news-nav-menu'>
          {newsCategories.map((category, index) => {
            return (
              <li
                className={`news-nav-menu__item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <a href='#' className='news-nav-menu__item-link'>
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <span className='news-current-datetime'>Current date&time</span>
      </nav>
      <div className='news-content'>
        <ul>
          {newsNames.map((news, index) => {
            return (
              <li className='news-content__item' key={index}>
                <Image
                    imageClass='news-content__item__image'
                    src={news.src}
                    alt='image-link'
                />
                {news.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
