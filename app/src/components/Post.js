import PropTypes from 'prop-types'

const Post = ({title, img_url}) => {
  return (
    <div className="Post">
      <h3 style={{padding: '3%', paddingBottom: '0%'}}>{title}</h3>
      <img src={img_url} alt="post_img"
        style={{maxWidth: '100%', maxHeigh: 600, padding: '3%', paddingTop: '0%'}}/>
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