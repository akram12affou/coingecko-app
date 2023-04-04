import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import "../styles/LoginModal.scss";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const [register , setRegister] = useState(true)
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 console.log(password, email,name)
  return (
    <div>
      <Button onClick={handleOpen}>
        <StarBorderRoundedIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="title">
            Login to track your favorite coin easily 🚀
          </div>
          <div  className="container">
          {register &&  <div className='input-label'>
              
              <TextField
                id="standard-basic"
                label="name"
                value={name}
                onChange={(e) => {
                 setName(e.target.value)
                }}
                variant="standard"
                color="primary"
                type="text"
                placeholder="enter your name"
              />
            </div>}
            <div className='input-label'>
                
              <TextField
                id="standard-basic"
                label="email"
                value={email}
                onChange={(e) => {
                 setEmail(e.target.value)
                }}
                variant="standard"
                color="primary"
                type="text"
                placeholder="enter your email"
              />
            </div>
            <div className='input-label'>
             
              <TextField
                id="standard-basic"
                label="password"
                value={password}
                onChange={(e) => {
                 setPassword(e.target.value)
                }}
                variant="standard"
                color="primary"
                type="text"
                placeholder="enter your password "
              />
            </div>
          </div>
          <div className="message" onClick={() => setRegister(!register)}>
          {register ? <>i already have an account</> : <>i dont have an account</>}  
          </div>
          <div className="buttons-form">
            <button>{register ? <>Sign Up</> : <>Sign In</>}</button>
            <button>Cancel</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
