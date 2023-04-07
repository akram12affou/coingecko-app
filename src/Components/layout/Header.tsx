import {FC} from 'react';
import '../../styles/Header.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from '@mui/icons-material/Login';
 import {  auth } from "../../firebase/firebase-con";
import {useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import LoginModal from '../LoginModal';
const Header : FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const user = useSelector(state => state.userInfo)
  const navigate = useNavigate()
  const logOut  = async () => {
    await signOut(auth);
    navigate("/");
    handleClose();
  }
  return (
    <header>
      <div className='header'>
      <div>
      <h2 className='brandname' onClick={() => navigate('/')}>
        APEX
      </h2>
      </div>
      <div className='buttons'>
        <button onClick={() => navigate('/')}><HomeRoundedIcon/></button>
        {user?.displayName && 
        <div className='container-username'>    
        <button onClick={() => navigate('/favoritecoins')} ><BookmarksRoundedIcon/></button>
        |<span className='user-container'>  <AccountCircleRoundedIcon/> {user?.displayName}</span>
        <button  onClick={handleOpen}><LogoutIcon/></button>
        </div>
        }
        
      </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}> 
       
          <div className='modal-container'>
            <div className='close-button'><CloseIcon onClick={handleClose} /></div>
           <span> Are you sure you want to log out ?</span>
          <button  onClick={logOut}> Log Out</button> 
          </div>
          
        </Box>
      
      </Modal>
    </header>
  )
}

export default Header