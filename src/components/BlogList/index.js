import './index.css'

const BlogList = props => {
  const {eachObject} = props
  const {title, description, publishedDate} = eachObject

  return (
    <li className="list-item">
      <div className="adj">
        <h1 className="head">{title}</h1>
        <p className="gray">{publishedDate}</p>
      </div>
      <p className="grey">{description}</p>
    </li>
  )
}
export default BlogList
