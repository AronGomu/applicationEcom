import PropTypes from 'prop-types'

const Post = ({title, author, imageLink}) => {
  return (
    <div className="Post">
      <h3 style={{padding: '3%', paddingBottom: '0%'}}>{title}</h3>
      <div style={{padding: '3%', paddingTop: '0%'}}>
        <img src={imageLink} alt="No Image..."
          style={{maxWidth: '100%', maxHeigh: 600}}
        />
        <p style={{float: 'right'}}>{author}</p>
      </div>
      
    </div>
  )
}

Post.defaultProps = {
}

Post.propTypes = {
  title: PropTypes.string,
  img_url: PropTypes.string
}

export default Post