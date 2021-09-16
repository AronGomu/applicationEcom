// React Import
import PropTypes from 'prop-types'

// Custom Components
import Header from './components/Header';
import Login from './components/Login';
import AddPostForm from './components/AddPostForm'
import Post from './components/Post'


var connected = false;
var showLoginPopupPage = true;


var loginClick = () => {
  showLoginPopupPage = true
}

const LoginPopupPage = ({showLoginPopupPage}) => {
  console.log("LoginPopupPage")
  console.log(showLoginPopupPage)
  if (showLoginPopupPage === true) return <Login show={showLoginPopupPage}/>
  return null
}

function App() {
  document.body.style.backgroundColor = App.defaultProps.bodyBackgroundColor;
  console.log(connected);
  return (
    <div className="App">
      <Header 
        title="Ephemerate" 
        materializeIconCode="image"
        colorNavbar="#828FD5"
        connected={connected}
        loginColorButton="#B4D5C9"
        loginClickFunction={loginClick}
        logoutColorButton="#DBB3D2"/>
      <div className="container" style={{borderLeftStyle: 'solid', borderRightStyle: 'solid', borderWidth: '1px', borderColor: 'black'}}>
        <div className="">
          <AddPostForm />
        </div>
        <Post title="test" img_url="https://cdnb.artstation.com/p/assets/images/images/040/240/953/4k/lisa-schertler-edit.jpg?1628264052"/>
      </div>
      <LoginPopupPage showLoginPopupPage={showLoginPopupPage}/>
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
