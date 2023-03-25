import {FC} from 'react'
import '../../styles/Header.scss'
const Header : FC = () => {
  return (
    <header>
      <div className='header'>
      <div>
      <h2 className='brandname'>
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