// React Import
import PropTypes from 'prop-types'
import {useState} from 'react'

// Custom Components
import Header from './Header';
import PopupForm from './PopupForm';
import Tile from './Tile';
import { httpRequest } from '../services/HttpRequest';
import globalData from '../services/globalData';

import { Link } from 'react-router-dom';

function Userpost() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [useBlur, setUseBlur] = useState("blur(0px)");
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState([]);
  const [postAreLoaded, setPostAreLoaded] = useState(false);

  const usernameInUrl = window.location.pathname.split(':')[1]

  // HTTP REQUESTS
  function loadPost() {
    return httpRequest('GET', `http://127.0.0.1:8000/api/userpost/${usernameInUrl}`)
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
    globalData.username = null;
    setUsername(null);
  }

  console.log(posts)

  return (
    <div className="Userpost">
      <Header 
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
      <div class="container">
        <div style={{'paddingBottom': '30px'}}>
          <h3>Posts from {usernameInUrl}</h3>
        </div>
        <div class="row">
          {posts.map(function(post, i){
            return (
              <Link className="Button" to={'/post:' + post.id}>
                <div class="col s6 m4 l3">
                  <Tile title={post.title} imageLink={post.imagelink} postId={post.id}/>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <PopupForm show={showLoginPage} hidePopupPageFunction={hidePopupPageFunction} signupFunction={signup} loginFunction={login}/>
    </div>
    );
}


Userpost.defaultProps = {
  //bodyBackgroundColor: '#121212', // Darkmode
  bodyBackgroundColor: '#D3D3D3',
}


Userpost.propTypes = {
  bodyBackgroundColor: PropTypes.string,

}




export default Userpost;