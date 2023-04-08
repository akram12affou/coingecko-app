import { useSelector } from 'react-redux'
import Coin from '../Coin'
import TableHeader from '../layout/TableHeader'
import '../../styles/FavoriteCoins.scss'
function FavoriteCoins() {
  const favoriteCoins = useSelector((state : any) => state.favoriteCoins)
  return (
    <div className='favorite-coins-container'>
      <div className='table-header-container'>
        <TableHeader/>
      </div>
      <div className='coins-container'>
        {favoriteCoins.map((coin : any) => {
      return(
        <Coin coin={coin.coin} i={0}/>
      )
    })
      }
      {favoriteCoins.length==0 && 
      <h2 style={{'color' : 'white'}}>
      no favorite coins yet
      </h2>

      }
      </div>
      </div>
  )
}

export default FavoriteCoins