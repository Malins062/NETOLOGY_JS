/**
 * Rendering an image
 *
 * @namespace Image
 * 
 * @param {string} containerClass - Classname for tag "div"
 * @param {string} imgClass - Classname for tag "img"
 * @param {string} src - Property "src" for "img"
 * @param {string} alt - Property "alt" for "img"
 */
export default function Image({ containerClass, imgClass, src, alt }:
  {containerClass: string; imgClass: string; src: string; alt: string }) {

  return (
    <div className={containerClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}
