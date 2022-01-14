import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { httpRequest } from '../services/HttpRequest';
import globalData from '../services/globalData';

import Header from './Header';
import PopupForm from './PopupForm';

const Post = (props) => {

  console.log("HEYA")

  const id = window.location.pathname.split(':')[1]

  console.log(id)

  const [showLoginPage, setShowLoginPage] = useState(false);
  const [useBlur, setUseBlur] = useState("blur(0px)");
  const [username, setUsername] = useState(globalData.username);
  const [post, setPost] = useState(null);

  // HTTP REQUESTS
  function loadPost() {
    return httpRequest('GET', `http://127.0.0.1:8000/api/post/${id}`)
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

  function deletePost() {
    httpRequest('DELETE', `http://127.0.0.1:8000/api/post/${id}`, null)
    .then(
      () => {
        console.log('HELLO');
        window.location.href = '/';
      },
      // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
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
        globalData.username = data.username;
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
          globalData.username = data.username;
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

  // Functions for header

  function showLoginPageFunction() {
    setShowLoginPage(true);
    setUseBlur("blur(8px)");
  }

  function hidePopupPageFunction() {
    setShowLoginPage(false);
    setUseBlur("blur(0px)");
  }

  function logout() {
    globalData.username = null;
    setUsername(null);
    console.log("LOGOUT");
  }

  // Trigger the HttpRequest to load the post
  if (post == null) {
    loadPost().then((result) => {
      console.log(result);
      console.log(result.message);
      if (result.message == "The post does not exist") setPost(null);
      else setPost(result);
    })

    console.log(id);

    return (<h2>No post found</h2>)
  }

  else {

    console.log(post);
    let deleteButton = null;
    if (globalData.username === post.author) {
      deleteButton = (
            <button
            class="btn waves-effect red waves-light" type="submit" name="action" onClick={deletePost}>
                Delete Image <i class="material-icons right">delete</i>
            </button>
      );
    }

    

      return (
        <div>
          <Header className='Post' 
          style={{filter: useBlur}}
          username={globalData.username}
          title="Ephemerate" 
          materializeIconCode="image"
          colorNavbar="#828FD5"
          loginColorButton="#B4D5C9"
          logoutColorButton="#DBB3D2"
          loginClickFunction={showLoginPageFunction}
          logoutClickFunction={logout}
          />
          <PopupForm show={showLoginPage} hidePopupPageFunction={hidePopupPageFunction} signupFunction={signup} loginFunction={login}/>
          <div class='container'>
            <h2>{post.title}</h2>
            <img src={post.imagelink} style={styleImg}/>
            <Link className='Button' to={'/userpost/:' + post.author}>
              <div style={styleAuthor}>
                  posted by <a>{post.author}</a>
              </div>
            </Link>
            <div style={styleDeleteBtn}>{deleteButton}</div>
          </div>
          
        </div>
      )
    }
}

const styleImg = {
  'maxWidth': '100%',
  'display': 'block',
  'marginLeft': 'auto',
  'marginRight': 'auto'
}

const styleAuthor = {
  'textAlign': 'right'
}

const styleDeleteBtn = {
  'margin': '0',
  'position': 'relative',
  'top': '50%',
  'left': '50%',
  '-msTransform': 'translate(-50%, -50%)',
  'transform': 'translate(-50%, -50%)'
}

export default Post