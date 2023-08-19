export const New = (props: any) => {
    return (
        <div className='wrap-item wrap-item-new'>
            <span className='label'>New!</span>
            {props.children}
        </div>
    )
}
