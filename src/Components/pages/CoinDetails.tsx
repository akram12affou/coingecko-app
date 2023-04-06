import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/CoinDetails.scss";
import LoadingSpinner from "../layout/LoadingSpinner";
import DOMPurify from "dompurify";
import { fetchCoinDetails } from "../../redux/action";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const CoinDetails: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const coinDetails : object = useSelector((state) => state.coinDetails);
  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => dispatch(fetchCoinDetails(res.data)))
      .then((res) => setLoading(false));
  }, []);
  // const {
  //   image,
  //   market_cap,
  //   symbol,
  //   id,
  //   total_volume,
  //   current_price,
  //   sparkline_in_7d
  // } = coinDetails;
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
            <div className="coin-name">{coinDetails.name}</div>
            <div className="coin-rank-price-container">
              <div className="rank">Rank # {coinDetails.market_cap_rank}</div>
              <div className="coin-rank-price">
                <div className="coin-name-under">
                  <img src={coinDetails.image?.small} alt="" />
                  {coinDetails.name}
                </div>
                <div className="coin-price">
                  ${coinDetails?.market_data.current_price.usd.toLocaleString()}
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
                <div>
                  {coinDetails?.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div>
                  {coinDetails?.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div>
                  {coinDetails?.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div>
                  {coinDetails?.market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div>
                  {coinDetails?.market_data?.price_change_percentage_30d_in_currency?.usd.toFixed(
                    1
                  )}
                  %
                </div>
                <div>
                  {coinDetails?.market_data?.price_change_percentage_1y_in_currency?.usd.toFixed(
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
                  {coinDetails?.market_data?.low_24h?.usd.toLocaleString()}
                </div>
                <hr />
                <div>
                  24 Hour High &nbsp;&nbsp;&nbsp; $
                  {coinDetails?.market_data?.high_24h?.usd.toLocaleString()}
                </div>
                <hr />
              </div>
              <div>
                {" "}
                <div>
                  Market Cap &nbsp;&nbsp;&nbsp; $
                  {coinDetails?.market_data?.market_cap?.usd.toLocaleString()}
                </div>
                <hr />
                <div>
                  Circulating Supply &nbsp;&nbsp;&nbsp;{" "}
                  {coinDetails?.market_data?.circulating_supply}
                </div>
                <hr />
              </div>
            </div>
            {coinDetails.description.en && (
              <div className="about-container">
                <div>About</div>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      coinDetails.description ? coinDetails.description.en : ""
                    ),
                  }}
                ></div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CoinDetails;
