// React Import
import PropTypes from 'prop-types'
import {useState} from 'react'

// Custom Components
import Header from './components/Header/Header';
import PopupForm from './components/PopupForm';
import AddPostForm from './components/AddPostForm'
import Post from './components/Post'


var postAreLoaded = false;

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [useBlur, setUseBlur] = useState("blur(0px)");
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState([]);

  if (postAreLoaded === false) {
    loadPost().then((result) => {
      setPosts(result);
      postAreLoaded = true;
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

  function signup(username, password) {
    const data = {username: username, password: password}
    httpRquest('POST', "http://127.0.0.1:8000/api/user", data)
    .then(
      () => {
        setUsername(data.username);
        hidePopupPageFunction();
      },
      // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    )
  }

  function login(username, password) {
    const data = {username: username, password: password}
    httpRquest('POST', "http://127.0.0.1:8000/api/login", data)
    .then(
      (result) => {
        if (result.message !== "The user does not exist") {
          setUsername(data.username);
          hidePopupPageFunction();
        }
      },
      // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    )
  }

  function addPost(title, author, imagelink) {
    const data = {title: title, author: author, imagelink: imagelink}
    httpRquest('POST', "http://127.0.0.1:8000/api/post", data)
    .then(
      (result) => {
        console.log("IMG POSTED")
        console.log(result)
        setPosts(posts.push(data))
      },
      // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    )
  }


  function logout() {
    setUsername(null);
  }
  

  document.body.style.backgroundColor = App.defaultProps.bodyBackgroundColor;

  if (username == null) {
    return (
      <div className="App">
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
          return <Post title={post.title} author={post.author} imageLink={post.imagelink}/>;
        })}
        </div>
        <PopupForm show={showLoginPage} hidePopupPageFunction={hidePopupPageFunction} signupFunction={signup} loginFunction={login}/>
      </div>
      
    );
  }

  return (
    <div className="App">
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
        <div className="">
          <AddPostForm username={username} addPost={addPost} />
        </div>
        {posts.map(function(post, i){
          return <Post title={post.title} author={post.author} imageLink={post.imagelink}/>;
        })}
      </div>
      <PopupForm show={showLoginPage} hidePopupPageFunction={hidePopupPageFunction} signupFunction={signup} loginFunction={login}/>
    </div>
  );
}


App.defaultProps = {
  bodyBackgroundColor: '#D3D3D3',
}


App.propTypes = {
  bodyBackgroundColor: PropTypes.string,

}




export default App;



// Example POST method implementation:
async function httpRquest(method, url = '', data = null) {

  let request = {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }

  if (data != null) {
    request['body'] = JSON.stringify(data) // body data type must match "Content-Type" header
  }


  // Default options are marked with *
  const response = await fetch(url, request);
  return response.json(); // parses JSON response into native JavaScript objects
}


function loadPost() {
  return httpRquest('GET', "http://127.0.0.1:8000/api/post")
  .then(
    (result) => {
      return result;
    },
    // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
    (error) => {
      console.log("ERROR");
      console.log(error);
    }
  )


}