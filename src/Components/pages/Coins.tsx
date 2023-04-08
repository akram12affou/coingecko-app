import { FC, useState, useEffect } from "react";
import "../../styles/Coins.scss";
import { fetchCoins } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TextField } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Coin from "../Coin";
import LoadingSpinner from "../layout/LoadingSpinner";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TableHeader from "../layout/TableHeader";

const Coins: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const coins : [] = useSelector((state : any) => state.coins);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true`
      )
      .then((res) => {
        dispatch(fetchCoins(res.data));
      })
      .then((res) => {
        setLoading(false);
      });
  }, [page]);
  const handleChange = (event:any, value:number) => {
    setPage(value);
    let element :any  = document.querySelector(".brandname")
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="coins-container">
      <div className="input-container">
        <TextField id="standard-basic" label="search a coin ..." variant="standard" value={query} onChange={(e) => {
          setQuery(e.target.value)
          
        }}
        color="primary" type="text" placeholder="search a coin ..." />{" "}
        <SearchRoundedIcon/>
      </div>
       <TableHeader/>
      {loading ? (
        <div className="loading-spiner-container">
          {" "}
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {coins.filter((e :any) =>
          query == '' ? true : 
          e.symbol.toUpperCase().includes(query.toUpperCase())
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
