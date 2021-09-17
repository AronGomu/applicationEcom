//import PropTypes from 'prop-types'

const Login = ({swapToSignupPopup, loginFunction}) => {

  return (
		<div className="login center">
			<h4>Login</h4>

			<form onSubmit={loginFunction} style={{paddingLeft: 50, paddingRight: 50, paddingBottom: 10}}>

				<div className="input-field" style={{paddingBottom: 10}}>
					<input type="text" id="name"/>
					<label>Username</label>
				</div>

				<div className="input-field" style={{paddingBottom: 10}}>
					<input type="password" id="pass"/>
					<label>Password</label>
				</div>

				<input type="submit" value="Login" className="btn btn-large" style={{color: "#C1E1C1"}}/>
			</form>
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