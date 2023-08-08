const divStyle = {
    width: "18rem"
}

export const Card = (props: any) => {
  return (
    <>
        <div className="card" style={divStyle}>
            {
                props.img ? <img src={props.img?.src} className="card-img-top" alt={props.img?.alt}/> : null
            }
           <>{props.children}</> 
        </div>
    </>
  )
}
