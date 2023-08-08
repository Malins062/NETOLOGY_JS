import Image from "./Image";

/**
 * Rendering search functional content
 * 
 * @namespace Search
 * 
 * @param {Array<string>} searchCategories - Names of categories for search
 */
export default function Search({ searchСategories }: { searchСategories: Array<string>}) {
  return (
    <div className='search'>
      <Image
          containerClass='search-yandex'
          imgClass='search-yandex-image'
          src=''
          alt='Yandex search image'
      />
      <nav className='search-nav'>
        <ul className='search-nav-menu'>
          {searchСategories.map((category, index) => {
            return (
              <li className='search-nav-menu__item active' key={index}>
                <a href='#0' className='search-nav-menu__item-link'>
                  {category}
                </a>
              </li>
            );
          })}
          <li className='search-nav-menu__item'>
            <a href='#0' className='search-nav-menu__item-link'>
              ещё
            </a>
          </li>
        </ul>
      </nav>

      <form className='search-bar'>
        <input className='search-bar-input' id='search-bar-input' type='text' name='search-bar-input' required />
        <button className='search-bar-button' type='submit'>Найти</button>
      </form>

      <p className='search-advice'>
        Найдется всё. НАПРИМЕР,
        <span className='search-advice__example'>
          &nbsp; фаза луны сегодня
        </span>
      </p>
    </div>
  );
}
