import { FC } from "react";
import {useNavigate} from 'react-router-dom' 
import '../styles/Coin.scss'

import ChartLine from '../Components/LineChart'
import LoginModal from "./LoginModal";
const Coin: FC<{ coin: []; i: number }> = ({ coin, i }) => {
  const navigate = useNavigate()
  const {
    image,
    market_cap,
    symbol,
    id,
    total_volume,
    current_price,
    sparkline_in_7d
  } = coin;
  const console = (e)=> {
  navigate(`/`)
  }
  return (
    <div key={id} className='coin-container'>
      <div > <LoginModal/></div>
      <div className="logo-name" onClick={() => navigate(`/coinDetails/${id}`)} >
        <img src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </div>
      <div  onClick={() => navigate(`/coinDetails/${id}`)}>
        <span>${current_price}</span>
      </div>
      
      <div className='none-res'  onClick={() => navigate(`/coinDetails/${id}`)}>${total_volume}</div>
      <div className='none-res'  onClick={() => navigate(`/coinDetails/${id}`)}>${market_cap}</div>
      <div className='chart-container'   onClick={() => navigate(`/coinDetails/${id}`)}> 
        <ChartLine spark={sparkline_in_7d.price} /> 
      </div>
    </div>
  );
};

export default Coin;
