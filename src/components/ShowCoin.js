import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import HistoryChart from "../components/HistoryChart";
// import CoinData from "../components/CoinData";
import coinGecko from "../coinGecko";
import ChartsDetails from "./ChartsDetails";
import CoinDetails from "./CoinDetails";


const ShowCoin = () => {

  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

   useEffect(() => {
    console.log(id)
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "inr",
            ids: id,
          },
        }),
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
        return (
            <div class="spinner">
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                   </div>
            </div> 
            </div>        
        )
    }
      

    return (
     
      <div className="container">
        <br />
        <br/>
        <ChartsDetails data={coinData} />
        <br />
        <hr/>
        <CoinDetails data={coinData.detail} />
        <br/>
      </div>
      
    );
  };

  return renderData();
};

export default ShowCoin;