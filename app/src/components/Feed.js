// React Import
import PropTypes from 'prop-types'
import {useState} from 'react'

// Custom Components
import Header from './Header/Header';
import PopupForm from './PopupForm';
import AddPostForm from './AddPostForm'
import Post from './Post'
import { httpRequest } from '../services/HttpRequest';

function Feed() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [useBlur, setUseBlur] = useState("blur(0px)");
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState([]);
  const [postAreLoaded, setPostAreLoaded] = useState(false);


  // HTTP REQUESTS
  function loadPost() {
    return httpRequest('GET', "http://127.0.0.1:8000/api/post")
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    )
  }

  function signup(username, password) {
    
    const data = {username: username, password: password};
    httpRequest('POST', "http://127.0.0.1:8000/api/user", data)
    .then(
      () => {
        setUsername(data.username);
        hidePopupPageFunction();
      },
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    )
  }

  function login(username, password) {
    const data = {username: username, password: password}
    httpRequest('POST', "http://127.0.0.1:8000/api/login", data)
    .then(
      (result) => {
        if (result.message !== "The user does not exist") {
          setUsername(data.username);
          hidePopupPageFunction();
        }
      },
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    )
  }


  function addPost(title, author, imagelink) {
    const data = {title: title, author: author, imagelink: imagelink}
    httpRequest('POST', "http://127.0.0.1:8000/api/post", data)
    .then(
      (result) => {
        setPosts(posts.push(data))
      },
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    )
  }

  function deletePost(id) {
    httpRequest('DELETE', "http://127.0.0.1:8000/api/post/" + id, null)
    .then(
      () => {
        setPostAreLoaded(false);
      },
      // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    )
  }

  // Trigger the HttpRequest to load the post
  if (postAreLoaded === false) {
    loadPost().then((result) => {
      setPosts(result);
      setPostAreLoaded(true);
    })
  }

  function showLoginPageFunction() {
    setShowLoginPage(true);
    setUseBlur("blur(8px)");
  }

  function hidePopupPageFunction() {
    setShowLoginPage(false);
    setUseBlur("blur(0px)");
  }


  function logout() {
    setUsername(null);
  }

  console.log(posts)

  document.body.style.backgroundColor = Feed.defaultProps.bodyBackgroundColor;

  if (username == null) {
    return (
      <div className="Feed">
        <Header 
          style={{filter: useBlur}}
          username={username}
          title="Ephemerate" 
          materializeIconCode="image"
          colorNavbar="#828FD5"
          loginColorButton="#B4D5C9"
          logoutColorButton="#DBB3D2"
          loginClickFunction={showLoginPageFunction}
          logoutClickFunction={logout}
          />
        <div className="container" style={{borderLeftStyle: 'solid', borderRightStyle: 'solid', borderWidth: '1px', borderColor: 'black', filter: useBlur}}>
        {posts.map(function(post, i){
          return <Post id={post.id} username={username} title={post.title} author={post.author} imageLink={post.imagelink} deletePostFunction={deletePost}/>;
        })}
        </div>
        <PopupForm show={showLoginPage} hidePopupPageFunction={hidePopupPageFunction} signupFunction={signup} loginFunction={login}/>
      </div>
      
    );
  }

  return (
    <div className="Feed">
      <Header 
        style={{filter: useBlur}}
        username={username}
        title="Ephemeral" 
        materializeIconCode="image"
        colorNavbar="#828FD5"
        loginColorButton="#B4D5C9"
        logoutColorButton="#DBB3D2"
        loginClickFunction={showLoginPageFunction}
        logoutClickFunction={logout}
        />
      <div className="container" style={{borderLeftStyle: 'solid', borderRightStyle: 'solid', borderWidth: '1px', borderColor: 'black', filter: useBlur}}>
        <div className="">
          <AddPostForm username={username} addPost={addPost} />
        </div>
        {posts.map(function(post, i){
          return <Post id={post.id} username={username} title={post.title} author={post.author} imageLink={post.imagelink} deletePostFunction={deletePost}/>;
        })}
      </div>
      <PopupForm show={showLoginPage} hidePopupPageFunction={hidePopupPageFunction} signupFunction={signup} loginFunction={login}/>
    </div>
  );
}


Feed.defaultProps = {
  //bodyBackgroundColor: '#121212', // Darkmode
  bodyBackgroundColor: '#D3D3D3',
}


Feed.propTypes = {
  bodyBackgroundColor: PropTypes.string,

}




export default Feed;