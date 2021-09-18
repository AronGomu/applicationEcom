//import PropTypes from 'prop-types'
import { useState } from "react"

const AddPostForm = ({username, addPost}) => {

  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(username);
	const [imageLink, setImageLink] = useState(null);

  console.log("AddPostForm")
  console.log(username)
  console.log(author)

	function onSubmitFunction() {
		console.log(title + " " + author + " " + imageLink);
		addPost(title, author, imageLink);
	}

  return (
    <div className="AddPostForm" style={{paddingLeft: '3%', paddingRight: '3%', borderBottomStyle: 'solid', borderWidth: '1px', borderColor: 'black'}}>
      <div className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="img_url" type="text" className="validate" value={imageLink} onChange={(e) => setImageLink(e.target.value)}/>
            <label for="img_url">Image URL</label>
          </div>
          <div className="input-field col s9">
            <input placeholder="Placeholder" id="post_title" type="text" className="validate" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label for="img_url">Post Title</label>
          </div>
          <div className="input-field col s3">
            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={onSubmitFunction}>Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
AddPostForm.defaultProps = {
}

AddPostForm.propTypes = {
}
*/

export default AddPostForm