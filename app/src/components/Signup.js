//import PropTypes from 'prop-types'
import { useState } from "react"

const Login = ({signupFunction}) => {

	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	function onSubmitFunction() {
		console.log(username + " " + password)
		signupFunction(username, password);
	}

  return (
		<div className="signup center">
			<h4>Sign Up</h4>

			<div style={{paddingLeft: 50, paddingRight: 50, paddingBottom: 10}}>

				<div className="input-field" style={{paddingBottom: 10}}>
					<input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)}/>
					<label>Username</label>
				</div>

				<div className="input-field" style={{paddingBottom: 10}}>
					<input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
					<label>Password</label>
				</div>

				<input type="submit" value="Signup" className="btn btn-large" onClick={onSubmitFunction}/>
			</div>
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