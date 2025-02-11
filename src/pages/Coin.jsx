import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
import { AiOutlineOpenAI } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import Header from "../components/custom/Header";

export default function Coin() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Price (USD)",
        data: [30000, 31000, 32000, 30000, 29000, 28000],
        fill: false,
        borderColor: "rgb(99, 102, 241)",
        tension: 0.4,
        pointBackgroundColor: "rgb(99, 102, 241)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#1F2937",
        titleColor: "#FFFFFF",
        bodyColor: "#D1D5DB",
        cornerRadius: 6,
      },
    },
    scales: {
      x: {
        ticks: { color: "#D1D5DB" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#D1D5DB" },
        grid: { color: "#374151" },
      },
    },
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-background text-text-primary py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Coin Chart */}
        <div className="bg-card p-6 rounded-lg shadow-lg mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                alt="Bitcoin Logo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  Bitcoin
                </h2>
                <p className="text-green-400 text-sm">$70,894.18 +1.5%</p>
              </div>
            </div>
          </div>
          <div className="relative h-72">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* OHLC & Converter Widget'ları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* OHLC Prices */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              OHLC Prices (24H)
            </h3>
            <ul className="text-text-secondary space-y-2">
              <li>
                <span className="font-semibold text-text-primary">Open:</span>{" "}
                $71,077
              </li>
              <li>
                <span className="font-semibold text-text-primary">High:</span>{" "}
                $71,768
              </li>
              <li>
                <span className="font-semibold text-text-primary">Close:</span>{" "}
                $70,959
              </li>
              <li>
                <span className="font-semibold text-text-primary">Low:</span>{" "}
                $70,398
              </li>
            </ul>
          </div>

          {/* Converter */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Converter
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  placeholder="1"
                  className="w-full p-2 rounded-lg bg-input text-text-primary focus:outline-none"
                />
                <select className="p-2 rounded-lg bg-input text-text-primary focus:outline-none">
                  <option>BTC</option>
                  <option>ETH</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  placeholder="70948.16"
                  className="w-full p-2 rounded-lg bg-input text-text-primary focus:outline-none"
                />
                <select className="p-2 rounded-lg bg-input text-text-primary focus:outline-none">
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ChatGPT Widget */}
        <div className="bg-card p-6 rounded-lg shadow-lg mt-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Ask GPT-4o!
            </h3>
            <AiOutlineOpenAI className="w-6 h-6 text-text-primary" />
          </div>
          <ul className="text-text-secondary space-y-4 mb-8">
            <li className="cursor-pointer hover:text-text-primary">
              ➤ What's the latest news on Ethereum?
            </li>
            <li className="cursor-pointer hover:text-text-primary">
              ➤ Can you give me a market analysis of Dogecoin?
            </li>
            <li className="cursor-pointer hover:text-text-primary">
              ➤ What are predictions for Ripple this week?
            </li>
          </ul>
          <div className="relative pt-[60px]">
            <input
              type="text"
              placeholder="Ask something..."
              className="w-full p-4 rounded-full bg-input text-text-primary focus:outline-none"
            />
            <button className="absolute right-4 top-[75%] transform -translate-y-[50%] bg-muted p-2 rounded-full hover:bg-muted/80">
              <IoMdSend className="w-4 h-4 text-text-primary" />
            </button>
          </div>
        </div>

        {/* Coin Info */}
        <div className="bg-card p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            About Bitcoin (BTC)
          </h3>
          <p className="text-text-secondary leading-relaxed">
            Bitcoin is a decentralized digital currency that operates without a
            central bank or single administrator. It was created in 2009 by an
            unknown person or group of people using the pseudonym Satoshi
            Nakamoto. Transactions are verified by network nodes through
            cryptography and recorded in a public distributed ledger called a
            blockchain. Bitcoin has been hailed as a revolutionary innovation in
            the financial world, providing a secure and efficient way to
            transfer value globally.
          </p>
          <p className="text-text-secondary mt-4 leading-relaxed">
            Bitcoin is widely regarded as the first cryptocurrency, and its
            introduction ushered in a new era of decentralized finance. It is
            capped at 21 million coins, which ensures scarcity and helps
            maintain its value over time. As the world's most popular
            cryptocurrency, Bitcoin continues to attract attention from
            investors, institutions, and governments worldwide.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
