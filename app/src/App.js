// React Import
import PropTypes from 'prop-types'

// Custom Components
import Header from './components/Header';
import Login from './components/Login';
import AddPostForm from './components/AddPostForm'


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
      <div className="container">
        <div className="">
          <AddPostForm />
        </div>
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
