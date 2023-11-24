import { FC } from "react";
import {useNavigate} from 'react-router-dom' 
import '../styles/Coin.scss'
import ChartLine from '../Components/LineChart'
import LoginModal from "./LoginModal";
const Coin: FC<{ coin:any; i: number }> = ({ coin, i }) => {
  const navigate = useNavigate()
  
  const {
    image ,
    market_cap,
    symbol,
    id,
    total_volume,
    current_price,
    sparkline_in_7d
  } : {
    image :string,
    market_cap:number,
    symbol:string,
    id:string,
    total_volume:number,
    current_price:string,
    sparkline_in_7d:any
  }= coin;
  const navigateToDetails = () => {
    scrollTo(0, 0);
    navigate(`/coinDetails/${id}`)
  }
  return (
    <div className="flex coin-container"> 
     <div className="login-modal"><LoginModal coin={coin}/></div>
     <div key={id} className='coin-container-2' onClick={navigateToDetails}>
      
    
      <div className="logo-name"  >
        <img src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </div>
      <div  >
        <main>${current_price}</main>
      </div>
      <div className='none-res'  >${total_volume}</div>
      <div className='none-res'  >${market_cap}</div>
      <div className='chart-container'   > 
        <ChartLine spark={sparkline_in_7d.price} /> 
      </div>
    </div>
    </div>
  
  );
};

export default Coin;
