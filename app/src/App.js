// React Import
import PropTypes from 'prop-types'
import {useState} from 'react'

// Custom Components
import Header from './components/Header';
import PopupForm from './components/PopupForm';
import AddPostForm from './components/AddPostForm'
import Post from './components/Post'

var connected = false;


function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [useBlur, setUseBlur] = useState("blur(0px)")

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
  
    postData("http://127.0.0.1:8000/api/user", data)
        .then(
          (result) => {
            console.log("Got Result")
            console.log(result)
            hidePopupPageFunction();
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log("ERROR")
            console.log(error)
          }
        )
  
  }
  

  document.body.style.backgroundColor = App.defaultProps.bodyBackgroundColor;
  return (
    <div className="App">
      <Header 
        style={{filter: useBlur}}
        title="Ephemerate" 
        materializeIconCode="image"
        colorNavbar="#828FD5"
        connected={connected}
        loginColorButton="#B4D5C9"
        logoutColorButton="#DBB3D2"
        loginClickFunction={showLoginPageFunction}
        logoutClickFunction={null}
        />
      <div className="container" style={{borderLeftStyle: 'solid', borderRightStyle: 'solid', borderWidth: '1px', borderColor: 'black', filter: useBlur}}>
        <div className="">
          <AddPostForm />
        </div>
        <Post title="test" img_url="https://cdnb.artstation.com/p/assets/images/images/040/240/953/4k/lisa-schertler-edit.jpg?1628264052"/>
      </div>
      <PopupForm show={showLoginPage} hidePopupPageFunction={hidePopupPageFunction} signupFunction={signup}/>
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
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}