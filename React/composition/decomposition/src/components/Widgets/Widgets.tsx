/**
 * Rendering widgets content in columns
 * 
 * @namespace Widgets
 * 
 * @param {Array<any>} children - List of content widgets
 */
export default function Widgets(children: any) {
  return (
    <>
      <div className='widgets-column'>
        {children}
        {/* {children.map((widget, index) => {
          return (
            <div className='widget-container' key={index}>
              {widget}
            </div>
          );
        })} */}
      </div>
    </>
  );
}
