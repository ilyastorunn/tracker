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

// Chart.js modüllerini kaydet
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

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
    <div className="bg-[#1A202C] p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt="Bitcoin Logo"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-white">Bitcoin BTC</h2>
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

      {/* Chart */}
      <div className="relative h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}