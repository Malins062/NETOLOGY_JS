export const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <>
            <div className='btn-toggle'>
                <span
                    onClick={(view) => {onSwitch(view)}}
                    className='material-icons'>
                    {icon}
                </span>
            </div>
        </>
    )
}

export default IconSwitch;
