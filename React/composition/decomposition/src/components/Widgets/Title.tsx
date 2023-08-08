export interface TTitle {
  caption: string;
  url?: string;
}

/**
 * Rendering a title of widget
 *
 * @namespace Title
 * 
 * @param {TTitle} title - The title of widget
 * @param {string} title.caption - The caption of widget 
 * @param {string} [title.url] - URL link widget  
 */
export default function Title({ title }: { title: TTitle}) {
  return (
    <h3 className='widget-title'>
      <a href={title.url ? title.url : '#'} className='widget-title__link'>
        {title.caption}
      </a>
    </h3>
  );
}
