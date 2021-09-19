//import PropTypes from 'prop-types'
import { useState } from "react"

const Login = ({swapToSignupPopup, loginFunction}) => {

	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	function onSubmitFunction() {
		console.log(username + " " + password)
		loginFunction(username, password);
	}

  return (
		<div className="login center">
			<h4>Login to your Account</h4>

			<div style={{paddingLeft: 50, paddingRight: 50, paddingBottom: 10}}>

				<div className="input-field" style={{paddingBottom: 10}}>
					<input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)}/>
					<label>Username</label>
				</div>

				<div className="input-field" style={{paddingBottom: 10}}>
					<input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
					<label>Password</label>
				</div>

				<input type="submit" value="Let's Log" className="btn btn-large" style={{color: "#C1E1C1"}} onClick={onSubmitFunction}/>
			</div>
			<button style={{background: 'none', color: 'blue', border: 'none', cursor: 'pointer'}} onClick={swapToSignupPopup}>New ? Create new account</button>
		</div>
  )
}

/*
Login.defaultProps = {
}

Login.propTypes = {
}
*/

export default Login