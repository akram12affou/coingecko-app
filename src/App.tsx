import Header from './Components/layout/Header'
import Coins from './Components/pages/Coins'
import CoinDetails from './Components/pages/CoinDetails'
import {  Routes , Route } from 'react-router-dom'
import FavoriteCoins from './Components/pages/FavoriteCoins'
function App() {
 

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Coins/>}></Route>
      <Route path='/coinDetails/:id' element={<CoinDetails/>}></Route>
      <Route path='/favoritecoins' element={<FavoriteCoins/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
