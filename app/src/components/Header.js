import PropTypes from 'prop-types'

// Custom Classes Import
import Button from './Button'

const Header = ({ title, materializeIconCode, colorNavbar, connected, loginColorButton, logoutColorButton, loginClickFunction, logoutClickFunction }) => {

  console.log("HEADER")

  return (
    <div className='header'>
      <nav style={{ backgroundColor: colorNavbar }}>
        <div className="nav-wrapper" style={{ paddingLeft: 20, paddingBottom: 20, paddingRight: 20}}>
          <div className="brand-logo">
          <i className="large material-icons">{materializeIconCode}</i>
            {title}
          </div>
          <ul id="nav-mobile" className="right">
            <li> 
              <ConnexionButton connected={connected} loginColorButton={loginColorButton} logoutColorButton={logoutColorButton} loginClickFunction={loginClickFunction} logoutClickFunction={logoutClickFunction} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

const ConnexionButton = ({connected, loginColorButton, logoutColorButton, loginClickFunction, logoutClickFunction}) => {
  console.log(loginColorButton);

  if (connected === true) {
    return <Button text="logout" color={logoutColorButton} onClick={logoutClickFunction}/>
  }
  else {
    return <Button text="login" color={loginColorButton} onClick={loginClickFunction}/>
  }
}

Header.defaultProps = {
  title: 'title is Required',
  materializeIconCode: 'materializeIconCode is required',
  colorNavbar: '#FDD9DB',
  connected: false,
  loginColorButton: "#C1E1C1",
  logoutColorButton: "#DBB3D2",
  loginClickFunction: null,
  logoutClickFunction: null
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  materializeIconCode: PropTypes.string.isRequired,
  colorNavbar: PropTypes.string,
  connected: PropTypes.bool.isRequired,
  loginColorButton: PropTypes.string,
  logoutColorButton: PropTypes.string,
  loginClickFunction: PropTypes.func,
  logoutClickFunction: PropTypes.func

}

export default Header