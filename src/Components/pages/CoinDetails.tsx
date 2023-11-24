import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/CoinDetails.scss";
import LoadingSpinner from "../layout/LoadingSpinner";
import DOMPurify from "dompurify";
import { fetchCoinDetails } from "../../redux/action";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../LoginModal";
const CoinDetails: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const coinDetails = useSelector((state :any) => state.coinDetails);
  const coins : [] = useSelector((state : any) => state.coins)
  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => dispatch(fetchCoinDetails(res.data)))
      .then((res) => setLoading(false));
  }, []);
  const {
    name,
    image,
    market_cap_rank,
    market_data,
    description,
  }: {
    name : string,
    image : any,
    market_cap_rank : number,
    market_data : any,
    description : any
  } = coinDetails;
const coin = coins.filter((e : any) => {
  return e?.id == id
})
  return (
    <div>
      <div className="coin-details-container">
        {loading ? (
          <div className="loading-spiner-container">
            {" "}
            <LoadingSpinner />
          </div>
        ) : (
          <>
          {/* <LoginModal coin={coin}/> */}
          <div className="coin-name"><span>{name}</span> <span className="star-in-details"><LoginModal coin={coin[0]}/></span></div>
            <div className="coin-rank-price-container">
              <div className="rank">Rank # {market_cap_rank}</div>
              <div className="coin-rank-price">
                <div className="coin-name-under">
                  <img src={image?.small} alt="" />
                  {name}
                </div>
                <div className="coin-price">
                  ${market_data.current_price.usd.toLocaleString()}
                </div>
              </div>
            </div>
            <div className="variation-container">
              <div className="variation-container-time">
                <div>1h</div>
                <div>24h</div>
                <div>7d</div>
                <div>14d</div>
                <div>30d</div>
                <div>1yr</div>
              </div>
              <div className="variation-container-values">
                <div style={{'color': market_data?.price_change_percentage_1h_in_currency?.usd <0 ? 'red' : 'lightgreen'}}>
                  {market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div style={{'color': market_data?.price_change_percentage_24h_in_currency?.usd <0 ? 'red' : 'lightgreen'}}>
                  {market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div  style={{'color': market_data?.price_change_percentage_7d_in_currency?.usd <0 ? 'red' : 'lightgreen'}} >
                  {market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div style={{'color': market_data?.price_change_percentage_14d_in_currency?.usd <0 ? 'red' : 'lightgreen'}} >
                  {market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div style={{'color': market_data?.price_change_percentage_30d_in_currency?.usd <0 ? 'red' : 'lightgreen'}}>
                  {market_data?.price_change_percentage_30d_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div style={{'color': market_data?.price_change_percentage_1y_in_currency?.usd <0 ? 'red' : 'lightgreen'}}>
                  {market_data?.price_change_percentage_1y_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
              </div>
            </div>
            <div className="more-info">
              <div>
                <div>
                  24 Hour Low &nbsp;&nbsp;&nbsp; $
                  {market_data?.low_24h?.usd.toLocaleString()}
                </div>
                <hr />
                <div>
                  24 Hour High &nbsp;&nbsp;&nbsp; $
                  {market_data?.high_24h?.usd.toLocaleString()}
                </div>
                <hr />
              </div>
              <div>
                {" "}
                <div>
                  Market Cap &nbsp;&nbsp;&nbsp; $
                  {market_data?.market_cap?.usd.toLocaleString()}
                </div>
                <hr />
                <div>
                  Circulating Supply &nbsp;&nbsp;&nbsp;{" "}
                  {market_data?.circulating_supply}
                </div>
                <hr />
              </div>
            </div>
            {description.en && (
              <div className="about-container">
                <div>About</div>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      description ? coinDetails.description.en : ""
                    ),
                  }}
                ></div>
              </div>
            )}
          </>
        )}
        <br />
      </div>
      
    </div>
  );
};

export default CoinDetails;
