import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "./ChartConfig";
import { Chart } from "react-google-charts";

const ChartsDetails = ({ data }) => {
    
    const chartRef = useRef();
    const { day, week, year, detail } = data;
    const [timeFormat, setTimeFormat] = useState("24h");

    const determineTimeFormat = () => {
        switch (timeFormat) {
          case "24h":
            return day;
          case "7d":
            return week;
          case "1y":
            return year;
          default:
            return day;
        }
  };

    
  useEffect(() => {
    console.log()
        if (chartRef && chartRef.current && detail) {
          const chartInstance = new Chartjs(chartRef.current, {
            type: "line",
            data: {
              datasets: [
                {
                  label: `${detail.name} price`,
                  data: determineTimeFormat(),
                  backgroundColor: "rgb(0,0,128)",
                  borderColor: "rgba(174, 305, 194, 0.4",
                  pointRadius: 0,
                },
              ],
            },
            options: {
              ...historyOptions,
            },
          });
      // const google = window.google;
      // const data = google.visualization.arrayToDataTable([
      //    [determineTimeFormat(), detail]
      //   // Treat first row as data as well.
      // ], true);
      // console.log(data)
       }
      });
    
  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">INR {detail.current_price ? detail.current_price.toLocaleString() : "Not Available"}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-white black-3 btn"
                : "text-white black-4 btn"
            }
          >
            {detail.price_change_percentage_24h ? detail.price_change_percentage_24h.toFixed(2) : "Not Available"}%
          </p>
        </>
      );
    } 
  };

      return (
        <div style={{background:"white"}} className="border mt-2 rounded p-3">
          <div>{renderPrice()}</div>
          <div class="chart-container">
            <canvas ref={chartRef} id="myChart" width={300} height={300}></canvas>
            {/* <Chart
              width={'100%'}
              height={350}
              chartType="CandlestickChart"
              loader={<div>Loading Chart</div>}
              data={[
                determineTimeFormat(), data.day
              ]}
              options={{
                legend: 'none',
                bar: { groupWidth: '100%' }, // Remove space between bars.
                candlestick: {
                  fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
                  risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
               } ,
              }}
              /> */}
          </div>
    
          <div className="chart-button mt-1">
            <button
              onClick={() => setTimeFormat("24h")}
              className="btn btn-success "
            >
              24h
            </button>
            <button
              onClick={() => setTimeFormat("7d")}
              className="btn btn-success mx-1"
            >
              7d
            </button>
            <button
              onClick={() => setTimeFormat("1y")}
              className="btn btn-success"
            >
              1y
            </button>
          </div>
        </div>
      );
}

export default ChartsDetails
