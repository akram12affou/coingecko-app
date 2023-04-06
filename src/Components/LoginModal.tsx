import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth , db } from "../firebase/firebase-con";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import "../styles/LoginModal.scss";
import { useSelector } from "react-redux";
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

export default function LoginModal({coin}) {
  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const coins_db = collection(db, "coins");
  const navigate = useNavigate()
  const toTheHome = () => {
    navigate('/');
  }
  const user = useSelector((state) => state.userInfo);
  const favoriteCoins = useSelector((state) => state.favoriteCoins);
  const handleOpen = async  (id) => {
    if(auth.currentUser){
      if(exiteOrNot(id)){
       let  idfb = FindTheId(id)
        await deleteDoc(doc(db, "coins",idfb));
      }else{
        await addDoc(coins_db, {
          coin,
          user: user.email
        });
      }
      return;
    }
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };
  const register_acc = async () => {
    if (register == false) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setName("");
        toTheHome()
        handleClose();
        
      } catch (err) {
        window.alert(err?.message);
      }
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName: name }).catch(
          (err) => console.log(err)
        );
        setEmail("");
        setPassword("");
        setName("");
        toTheHome()
        handleClose();
        
      } catch (err) {
        window.alert(err?.message);
      }
    }
  };
  const FindTheId = (id) => {
  let idfb = '';
  favoriteCoins.map((e) => {
    if(e.coin.id == id){
      idfb=e.id
    }
  })
  return idfb
} 
  const exiteOrNot = (id) => {
    let exist = false;
    favoriteCoins.map((e) => {
      if(e.coin.id == id){
        exist=true
      }
    })
    return exist
  } 
  return (
    <div>
      <Button onClick={() => handleOpen(coin.id)}>
      {!exiteOrNot(coin.id) ? <StarBorderRoundedIcon />: <StarRoundedIcon/>}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className="close-button">
            <CloseIcon onClick={handleClose} />
          </div>
          <div className="title">
            Login to track your favorite coin easily 🚀
          </div>
          <div className="container">
            {register && (
              <div className="input-label">
                <TextField
              
                  label="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  variant="standard"
                  color="primary"
                  type="text"
                  placeholder="enter your name"
                />
              </div>
            )}
            <div className="input-label">
              <TextField
                
                label="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="standard"
                color="primary"
                type="text"
                placeholder="enter your email"
              />
            </div>
            <div className="input-label">
              <TextField
                
                label="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                variant="standard"
                color="primary"
                type="text"
                placeholder="enter your password "
              />
            </div>
          </div>
          <div className="buttons-form">
            <button onClick={register_acc}>
              {register ? <>Sign Up</> : <>Sign In</>}
            </button>
          </div>
          <div className="message-container">
            {register ? (
              <>
                Already a member ?{" "}
                <div className="message" onClick={() => setRegister(!register)}>
                  Log In.
                </div>
              </>
            ) : (
              <>
                Not a member yet ?{" "}
                <div className="message" onClick={() => setRegister(!register)}>
                  Sign Up.
                </div>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
