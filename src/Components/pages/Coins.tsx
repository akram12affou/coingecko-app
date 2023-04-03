import { FC, useState, useEffect } from "react";
import "../../styles/Coins.scss";
import { fetchCoins } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Coin from "../Coin";
import LoadingSpinner from "../layout/LoadingSpinner";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const Coins: FC = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=true`
      )
      .then((res) => {
        dispatch(fetchCoins(res.data));
      })
      .then((res) => {
        setLoading(false);
      });
  }, [page]);
  const handleChange = (event, value) => {
    setPage(value);
    document
      .querySelector(".brandname")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="coins-container">
      <div className="input-container">
        <input value={query} onChange={(e) => {
          setQuery(e.target.value)
        }} type="text" placeholder="search a coin ..." />{" "}
        <SearchRoundedIcon/>
      </div>

      <div className="table-header">
        <div>#</div>
        <div>Coin</div>
        <div>Price</div>
        <div className="none-res">Volume</div>
        <div className="none-res">Mkt Cap</div>
        <div>Chart</div>
      </div>
      {loading ? (
        <div className="loading-spiner-container">
          {" "}
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {coins.filter((e) =>
          query == '' ? true : 
           query.toUpperCase().includes(e.symbol.toUpperCase())
           ).map((coin, i) => {
            return (
              <>
                <Coin coin={coin} i={i} />
              </>
            );
          })}
         
          <div className="pagination">
            <Pagination
              count={10}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Coins;
