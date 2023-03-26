import { FC } from "react";
import {useNavigate} from 'react-router-dom' 
import '../styles/Coin.scss'
const Coin: FC<{ coin: []; i: number }> = ({ coin, i }) => {
  const navigate = useNavigate()
  const {
    image,
    market_cap,
    symbol,
    id,
    total_volume,
    current_price,
    price_change_percentage_24h,
  } = coin;

  return (
    <div key={id} className='coin-container' onClick={() => navigate(`/coinDetails/${id}`)}>
      <div>{i + 1}</div>
      <div className="logo-name">
        <img src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </div>
      <div>
        <span>${current_price}</span>
      </div>
      <div>
        <span>{price_change_percentage_24h.toFixed(2)}%</span>
      </div>
      <div>${total_volume}</div>
      <div>${market_cap}</div>
 
    </div>
  );
};

export default Coin;
