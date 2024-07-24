import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

const App = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const initialData = [
      {
        v: 15363,
        vw: 129.849,
        open: 129.6,
        close: 129.99,
        high: 130.3,
        low: 129.6,
        time: 1673254800000,
        n: 364,
      },
      {
        v: 13603,
        vw: 130.0603,
        open: 130.08,
        close: 129.95,
        high: 130.17,
        low: 129.9,
        time: 1673255100000,
        n: 291,
      },
      {
        v: 3064,
        vw: 129.979,
        open: 129.9,
        close: 130,
        high: 130.02,
        low: 129.9,
        time: 1673255400000,
        n: 113,
      },
      {
        v: 2519,
        vw: 130.205,
        open: 130.22,
        close: 130.19,
        high: 130.23,
        low: 130.19,
        time: 1673255700000,
        n: 73,
      },
      {
        v: 5038,
        vw: 130.2103,
        open: 130.24,
        close: 130.15,
        high: 130.25,
        low: 130.15,
        time: 1673256000000,
        n: 131,
      },
      {
        v: 7838,
        vw: 130.2531,
        open: 130.2,
        close: 130.2,
        high: 130.33,
        low: 130.2,
        time: 1673256300000,
        n: 207,
      },
      {
        v: 1832,
        vw: 130.2074,
        open: 130.2,
        close: 130.24,
        high: 130.24,
        low: 130.19,
        time: 1673256600000,
        n: 41,
      },
      {
        v: 1813,
        vw: 130.2131,
        open: 130.25,
        close: 130.19,
        high: 130.25,
        low: 130.19,
        time: 1673256900000,
        n: 59,
      },
      {
        v: 3966,
        vw: 130.2566,
        open: 130.2,
        close: 130.3,
        high: 130.3,
        low: 130.2,
        time: 1673257200000,
        n: 114,
      },
      {
        v: 3713,
        vw: 130.4049,
        open: 130.3,
        close: 130.47,
        high: 130.47,
        low: 130.3,
        time: 1673257500000,
        n: 86,
      },
      {
        v: 12772,
        vw: 130.4084,
        open: 130.48,
        close: 130.33,
        high: 130.5,
        low: 130.3,
        time: 1673257800000,
        n: 206,
      },
      {
        v: 2954,
        vw: 130.3245,
        open: 130.35,
        close: 130.29,
        high: 130.35,
        low: 130.29,
        time: 1673258100000,
        n: 79,
      },
      {
        v: 4000,
        vw: 130.2353,
        open: 130.26,
        close: 130.2,
        high: 130.26,
        low: 130.2,
        time: 1673258400000,
        n: 157,
      },
      {
        v: 1430,
        vw: 130.2342,
        open: 130.23,
        close: 130.22,
        high: 130.27,
        low: 130.21,
        time: 1673258700000,
        n: 58,
      },
      {
        v: 1222,
        vw: 130.3323,
        open: 130.33,
        close: 130.35,
        high: 130.35,
        low: 130.3,
        time: 1673259000000,
        n: 39,
      },
      {
        v: 3522,
        vw: 130.3342,
        open: 130.35,
        close: 130.42,
        high: 130.42,
        low: 130.3,
        time: 1673259300000,
        n: 93,
      },
      {
        v: 3234,
        vw: 130.4644,
        open: 130.45,
        close: 130.44,
        high: 130.49,
        low: 130.44,
        time: 1673259600000,
        n: 65,
      },
      {
        v: 4990,
        vw: 130.4446,
        open: 130.44,
        close: 130.35,
        high: 130.5,
        low: 130.35,
        time: 1673259900000,
        n: 146,
      },
      {
        v: 5077,
        vw: 130.2852,
        open: 130.4,
        close: 130.2,
        high: 130.4,
        low: 130.2,
        time: 1673260200000,
        n: 150,
      },
      {
        v: 1046,
        vw: 130.3096,
        open: 130.26,
        close: 130.35,
        high: 130.35,
        low: 130.26,
        time: 1673260500000,
        n: 42,
      },
      {
        v: 1630,
        vw: 130.2367,
        open: 130.27,
        close: 130.17,
        high: 130.27,
        low: 130.17,
        time: 1673260800000,
        n: 62,
      },
    ];

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
      },
      width: 700,
      height: 200,
    });

    const newSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    newSeries.setData(initialData);

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef}></div>;
};

export default App;
