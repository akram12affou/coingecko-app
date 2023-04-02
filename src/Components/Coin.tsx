import { FC } from "react";
import {useNavigate} from 'react-router-dom' 
import '../styles/Coin.scss'
import LineChart from '../Components/LineChart'
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
    sparkline_in_7d
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
      <div className='none-res' >${total_volume}</div>
      <div className='none-res' >${market_cap}</div>
      <div  > <LineChart spark={sparkline_in_7d.price} /> </div>
      {/* <div>{JSON.stringify(sparkline_in_7d)}</div> */}
    </div>
  );
};

export default Coin;
