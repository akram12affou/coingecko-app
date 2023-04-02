import {FC , useState , useEffect} from 'react'
import '../../styles/Coins.scss'
import { fetchCoins } from '../../redux/action'
import { useDispatch , useSelector } from 'react-redux'
import axios from 'axios'
import Coin from '../Coin'

const Coins: FC = ()  => {
  const dispatch = useDispatch()
  const coins = useSelector(state => state.coins)
  useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=$1&sparkline=true')
  .then((res) => {
    dispatch(fetchCoins(res.data))
  })
  },[])
  
  return (
    <div className='coins-container'>
      <div className='table-header'>
        <div>#</div>
        <div>Coin</div>
        <div>Price</div>
        <div className='none-res'>Volume</div>
        <div className='none-res'>Mkt Cap</div>    
        <div>Chart</div>
      </div>
        {
          coins.map((coin , i) => {
            return(
              <><Coin coin={coin} i={i}/>
        
              </>
              
            )
          })
        }

    </div>
  )
}

export default Coins