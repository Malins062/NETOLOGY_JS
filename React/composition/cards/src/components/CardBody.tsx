interface TProps {
  title: string;
  text: string;
  btn: {
    href?: string;
    caption: string;
  }
}

export const CardBody = (props: TProps) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href={props.btn?.href ? props.btn?.href : "#"} className="btn btn-primary">{props.btn?.caption}</a>
    </div>
  )
}
