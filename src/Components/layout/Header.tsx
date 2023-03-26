import {FC} from 'react'
import '../../styles/Header.scss'
import {useNavigate} from 'react-router-dom'
const Header : FC = () => {
  const navigate = useNavigate()
  return (
    <header>
      <div className='header'>
      <div>
      <h2 className='brandname' onClick={() => navigate('/')}>
        APEX
      </h2>
      </div>
      <div>
        <button>Coins</button>
      </div>
      </div>
    </header>
  )
}

export default Header