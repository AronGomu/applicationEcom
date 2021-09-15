import PropTypes from 'prop-types'

// Material Ui Import
import Toolbar from '@mui/material/Toolbar';

// Custom Classes Import
import Button from './Button'

const Header = ({ title, onClickFunction }) => {

  return (
    <header className='header'>
      <Toolbar>

      </Toolbar>
        
      <h1>{title}</h1>
      <Button
        //color='red'
        text='Login'
        onClick={onClickFunction}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header