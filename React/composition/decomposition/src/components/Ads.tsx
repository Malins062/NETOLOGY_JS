interface TTitle {
  url?: string;
  caption?: string;
}

/**
 * Rendering an advertisement
 * 
 * @namespace Ads
 * 
 * @param {TTitle} [title] - Title of advertisement
 * @param {string} [title.url] - URL link
 * @param {string} [title.caption] - Caption of link 
 * @param {string} [description] - Description of advertisement
 * @param {any} [children] - Other DOM elements
 */
export default function Ads({ title, description, children }: 
  { title?: TTitle, description?: string, children?: any }) {

  return (
    <div className='ads'>
      {children}
      
      {title 
        ? 
          <h3 className='ads-title'>
            <a href={title.url ? title.url:'#'} className='ads-title__link'>
              {title.caption}
            </a>
          </h3>
        : null
      }

      {description 
        ? 
          <p className='ads-description'>
            {description}
          </p>
        : null
      }
    </div>
  );
}
