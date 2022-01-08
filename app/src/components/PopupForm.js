//import PropTypes from 'prop-types'
import {useState} from 'react'

// Custom Classes
import Login from './Login'
import Signup from './Signup'

const PopupForm = ({show, hidePopupPageFunction, loginFunction, signupFunction}) => {

	const [popup, setPopup] = useState('login');

	function swapToSignupPopup() {
		setPopup("signup");
	}

	function swapToLoginPopup() {
		setPopup("login");
	}

	function hidePopupPageFunctionOnClick() {
		swapToLoginPopup();
		hidePopupPageFunction();
	}
		
	

	if (show === false) return null;

	if (popup === "login") {
		return (
			<div className='login container' style={{position: 'absolute', width: 1000, left: '50%', top: 100}}>
				<div style={{backgroundColor: 'white', position: 'relative', left: '-50%'}}>
					<button 
							style={{background: 'none', color: 'inherit', border: 'none', cursor: 'pointer', float: 'right', paddingLeft: 20, paddingRight: 20}}
							onClick={hidePopupPageFunctionOnClick}>
						<h5 >&#10005;</h5>
					</button>
	
					<Login swapToSignupPopup={swapToSignupPopup} loginFunction={loginFunction} />
					
				</div>
			</div>
		)
	}

	else if (popup === "signup") {
		return (
			<div className='login container' style={{position: 'absolute', width: 1000, left: '50%', top: 100}}>
				<div style={{backgroundColor: 'white', position: 'relative', left: '-50%'}}>
					<button 
							style={{background: 'none', color: 'inherit', border: 'none', cursor: 'pointer', float: 'right', paddingLeft: 20, paddingRight: 20}}
							onClick={hidePopupPageFunctionOnClick}>
						<h5 >&#10005;</h5>
					</button>
	
					<Signup swapToLoginPopup={swapToLoginPopup} signupFunction={signupFunction} />
					
				</div>
			</div>
		)
	}

  
}

/*
Login.defaultProps = {
}

Login.propTypes = {
}
*/

export default PopupForm