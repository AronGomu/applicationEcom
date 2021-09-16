import PropTypes from 'prop-types'

const Post = ({title, img_url}) => {
  return (
    <div className="Post">
      <h3>{title}</h3>
      <img src={img_url} alt="post_img"/>
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