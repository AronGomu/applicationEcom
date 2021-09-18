import PropTypes from 'prop-types'

// Custom Classes Import
import Button from './Button'

const Header = ({ username, title, materializeIconCode, colorNavbar, loginColorButton, logoutColorButton, loginClickFunction, logoutClickFunction }) => {

  return (
    <div className='header'>
      <nav style={{ backgroundColor: colorNavbar }}>
        <div className="nav-wrapper" style={{ paddingLeft: 20, paddingBottom: 20, paddingRight: 20}}>
          <div className="brand-logo">
          <i className="large material-icons">{materializeIconCode}</i>
            {title}
          </div>
          <ul id="nav-mobile" className="right">
            <li style={{paddingRight: 10}}>
              <h5>{username}</h5>
            </li>
            <li> 
              <ConnexionButton username={username} loginColorButton={loginColorButton} logoutColorButton={logoutColorButton} loginClickFunction={loginClickFunction} logoutClickFunction={logoutClickFunction} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

const ConnexionButton = ({username, loginColorButton, logoutColorButton, loginClickFunction, logoutClickFunction}) => {

  if (username === null) {
    return <Button text="login" color={loginColorButton} onClick={loginClickFunction}/>
  }
  else {
    return <Button text="logout" color={logoutColorButton} onClick={logoutClickFunction}/>
  }
}

Header.defaultProps = {
  username: 'test username',
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
  username: PropTypes.string,
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