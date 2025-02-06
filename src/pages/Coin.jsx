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
import gptlogo from "../assets/ChatGPT-Logo.png";

// Chart.js modüllerini kaydet
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function Coin() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Price (USD)",
        data: [30000, 31000, 32000, 30000, 29000, 28000],
        fill: false,
        borderColor: "rgb(99, 102, 241)", // Tailwind'in indigo-500 rengi
        tension: 0.4,
        pointBackgroundColor: "rgb(99, 102, 241)", // Noktaların rengi
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // ShadCN tarzı için minimal görünüm
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#1F2937", // Tailwind'in gray-800 rengi
        titleColor: "#FFFFFF", // Beyaz
        bodyColor: "#D1D5DB", // Tailwind'in gray-300 rengi
        cornerRadius: 6, // Tooltip yuvarlatılmış köşeler
      },
    },
    scales: {
      x: {
        ticks: { color: "#D1D5DB" }, // Tailwind'in gray-300 rengi
        grid: { display: false }, // X ekseninde grid çizgilerini kaldır
      },
      y: {
        ticks: { color: "#D1D5DB" },
        grid: { color: "#374151" }, // Tailwind'in gray-700 rengi
      },
    },
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="bg-[#1A202C] p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              alt="Bitcoin Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">Bitcoin</h2>
              <p className="text-green-400 text-sm">$70,894.18 +1.5%</p>
            </div>
          </div>
          <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        <div className="relative h-72">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4">
            OHLC Prices (24H)
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <span className="font-semibold text-white">Open:</span> $71,077
            </li>
            <li>
              <span className="font-semibold text-white">High:</span> $71,768
            </li>
            <li>
              <span className="font-semibold text-white">Close:</span> $70,959
            </li>
            <li>
              <span className="font-semibold text-white">Low:</span> $70,398
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4">Converter</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder="1"
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
              <select className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none">
                <option>BTC</option>
                <option>ETH</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder="70948.16"
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
              <select className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">Ask GPT-4o!</h3>
          <img
            src={gptlogo}
            alt="OpenAi Logo"
            className="w-16 h-8 text-white"
          />
        </div>
        <ul className="text-gray-300 space-y-4 mb-8">
          <li className="cursor-pointer hover:text-white">
            ➤ What's the latest news on Ethereum?
          </li>
          <li className="cursor-pointer hover:text-white">
            ➤ Can you give me a market analysis of Dogecoin?
          </li>
          <li className="cursor-pointer hover:text-white">
            ➤ What are predictions for Ripple this week?
          </li>
        </ul>
        <div className="relative pt-[60px]">
          <input
            type="text"
            placeholder="Ask something..."
            className="w-full p-4 rounded-full bg-gray-700 text-white focus:outline-none"
          />
          <button className="absolute right-4 top-[75%] transform -translate-y-[50%] bg-gray-800 p-2 rounded-full hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 4.75l-4.5 7.5h9l-4.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            About Bitcoin (BTC)
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Bitcoin is a decentralized digital currency that operates without a
            central bank or single administrator. It was created in 2009 by an
            unknown person or group of people using the pseudonym Satoshi
            Nakamoto. Transactions are verified by network nodes through
            cryptography and recorded in a public distributed ledger called a
            blockchain. Bitcoin has been hailed as a revolutionary innovation in
            the financial world, providing a secure and efficient way to
            transfer value globally.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
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
  );
}
