
export const GridItem = ({title, url}) => {
  return (
    <picture className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </picture>
  )
}
