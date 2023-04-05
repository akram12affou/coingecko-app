import {FC} from 'react';
import '../../styles/Header.scss';
import {useNavigate} from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import { useSelector } from 'react-redux';
const Header : FC = () => {
  const user = useSelector(state => state.userInfo)
  const navigate = useNavigate()
  return (
    <header>
      <div className='header'>
      <div>
      <h2 className='brandname' onClick={() => navigate('/')}>
        APEX
      </h2>
      </div>
      <div className='buttons'>
        <span className='user-container'> <AccountCircleRoundedIcon/> {user?.displayName}</span>
        <button onClick={() => navigate('/')}><HomeRoundedIcon/></button>
        <button onClick={() => navigate('/favoritecoins')} ><BookmarksRoundedIcon/></button>
      </div>
      </div>
    </header>
  )
}

export default Header