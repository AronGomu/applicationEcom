//import PropTypes from 'prop-types'

import "./Login.css"

const Login = ({loginFunction}) => {


  return (
    <div className='login'>
			<div id="login" className="modal">
				<h5 className="modal-close">&#10005;</h5>
				<div className="modal-content center">
					<h4>Login Form</h4>

					<form onSubmit={loginFunction}>

						<div className="input-field">
							<i className="material-icons prefix">person</i>
							<input type="text" id="name"/>
							<label>Username</label>
						</div>
						<br/>

						<div className="input-field">
							<i className="material-icons prefix">lock</i>
							<input type="password" id="pass"/>
							<label>Password</label>
						</div>
						<br/>

						<input type="submit" value="Login" className="btn btn-large"/>
						
					</form>
				</div>
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