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
import { Separator } from "@/components/ui/separator";

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
        borderColor: "#E5E5E5",
        tension: 0.4,
        pointBackgroundColor: "#E5E5E5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgb(var(--muted))",
        titleColor: "rgb(var(--text-primary))",
        bodyColor: "rgb(var(--text-secondary))",
        cornerRadius: 6,
      },
    },
    scales: {
      x: {
        ticks: { color: "rgb(var(--text-secondary))" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "rgb(var(--text-secondary))" },
        grid: { color: "rgb(var(--border))" },
      },
    },
  };

  return (
    <div className="bg-background min-h-screen py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Coin Chart Section */}
        <div className="bg-card p-6 rounded-lg shadow-lg">
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

        <Separator className="my-6 bg-border" />

        {/* ChatGPT Sekmesi */}
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Ask GPT-4o!
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="text-text-primary"
            >
              <path
                d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1-.05.07L13,26.55A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.47L20.16,9.64a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,.05-.07L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.07V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                fill="currentColor"
              />
            </svg>
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
          <div className="relative">
            <input
              type="text"
              placeholder="Ask something..."
              className="w-full p-4 rounded-full bg-input text-text-primary focus:outline-none"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-muted p-2 rounded-full hover:bg-muted/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 4.75l-4.5 7.5h9l-4.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <Separator className="my-6 bg-border" />

        {/* Coin Info Section */}
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            About Bitcoin (BTC)
          </h3>
          <p className="text-text-secondary leading-relaxed">
            Bitcoin is a decentralized digital currency that operates without a
            central bank or single administrator.
          </p>
          <p className="text-text-secondary mt-4 leading-relaxed">
            Bitcoin is widely regarded as the first cryptocurrency, and its
            introduction ushered in a new era of decentralized finance.
          </p>
        </div>
      </div>
    </div>
  );
}
