import PropTypes from 'prop-types'

const AddPostForm = () => {
  return (
    <div className="AddPostForm">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="img_url" type="text" className="validate"/>
            <label for="img_url">Image URL</label>
          </div>
          <div className="input-field col s9">
            <input placeholder="Placeholder" id="post_title" type="text" className="validate"/>
            <label for="img_url">Post Title</label>
          </div>
          <div className="input-field col s3">
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

AddPostForm.defaultProps = {
}

AddPostForm.propTypes = {
}

export default AddPostForm