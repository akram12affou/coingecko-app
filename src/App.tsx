import {useEffect , useState} from 'react'
import Header from './Components/layout/Header'
import Coins from './Components/pages/Coins'
import {auth ,db} from './firebase/firebase-con'
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux'
import {setUserInfo , setFavoriteCoins} from './redux/action'
import CoinDetails from './Components/pages/CoinDetails'
import {  Routes , Route } from 'react-router-dom'
import FavoriteCoins from './Components/pages/FavoriteCoins'
import { onAuthStateChanged } from 'firebase/auth'
function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userInfo);

  useEffect(() => {
    const coins_db = collection(db, "coins");
    onAuthStateChanged(auth , CurrentUser => {  
      dispatch(setUserInfo(CurrentUser))
    })
    const q = query(coins_db,where('user','==', user.email));   
    const unsuscribe = onSnapshot(q, (snapshot) => {
    let fav :[] = [] ;
    snapshot.forEach((doc) => {
        fav.push({ ...doc.data(), id: doc.id });
    });
    dispatch(setFavoriteCoins(fav));
    return () => unsuscribe();
  })
},[user?.email])

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Coins/>}></Route>
      <Route path='/coinDetails/:id' element={<CoinDetails/>}></Route>
      <Route path='/favoritecoins' element={<FavoriteCoins/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
