import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import logo from "../../assets/Bitcoin.svg";

export default function TrendingWidget() {
  const trendingItems = [
    {
      logo: logo,
      name: "Habibi",
      symbol: "HABIBI",
      price: "$0.03938",
      change: "42.9%",
      positive: true,
    },
    {
      logo: logo,
      name: "GALA",
      symbol: "GALA",
      price: "$0.04629",
      change: "1.3%",
      positive: true,
    },
    {
      logo: logo,
      name: "VaultCraft",
      symbol: "VCX",
      price: "$0.1094",
      change: "1.2%",
      positive: true,
    },
    {
      logo: logo,
      name: "Maga VP",
      symbol: "MVP",
      price: "$0.5739",
      change: "9.0%",
      positive: false,
    },
    {
      logo: logo,
      name: "Arbitrum",
      symbol: "ARB",
      price: "$1.12",
      change: "0.3%",
      positive: false,
    },
    {
      logo: logo,
      name: "Notcoin",
      symbol: "NOT",
      price: "$0.02233",
      change: "6.9%",
      positive: true,
    },
  ];

  return (
    <Card className="w-full h-full min-h-[250px] bg-card text-text-primary shadow-lg p-4 rounded-lg">
      <CardHeader>
        <h2 className="text-lg font-semibold">Trending</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 px-4"
            >
              <div className="flex items-center gap-3">
                <img className="w-4 h-4" src={item.logo} alt={item.name} />
                <div className="flex flex-col">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-text-secondary">
                    {item.symbol}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm font-medium">{item.price}</div>
                <div
                  className={`text-xs font-medium ${
                    item.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// OLD DESIGN

// import React from "react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import logo from "../../assets/Bitcoin.svg";

// export default function TrendingWidget() {

//   const trendingItems = [
//     {logo: logo, name: "Habibi", symbol: "HABIBI", price: "$0.03938", change: "42.9%", positive: true},
//     {logo: logo, name: "GALA", symbol: "GALA", price: "$0.04629", change: "1.3%", positive: true},
//     {logo: logo, name: "VaultCraft", symbol: "VCX", price: "$0.1094", change: "1.2%", positive: true},
//     {logo: logo, name: "Maga VP", symbol: "MVP", price: "$0.5739", change: "9.0%", positive: false},
//     {logo: logo, name: "Arbitrum", symbol: "ARB", price: "$1.12", change: "0.3%", positive: false},
//     {logo: logo, name: "Notcoin", symbol: "NOT", price: "$0.02233", change: "6.9%", positive: true},
//   ]

//   return (
//     <Card className="w-full h-full min-h-[250px] bg-black text-white shadow p-6">
//       <CardHeader>
//         <h2 className="text-lg font-semibold mb-4">Trending</h2>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-2 gap-4">
//           {trendingItems.map((item, index) => (
//             <div key={index} className="flex items-center justify-between gap-4 px-4">
//               <div className="flex items-center gap-2">
//                 <img className="w-4 h-4" src={item.logo} alt={item.name} />
//                 <div className="flex flex-col">
//                   <div className="text-sm font-medium">{item.name}</div>
//                   <div className="text-xs text-gray-400">{item.symbol}</div>
//                 </div>
//               </div>
//               <div className="flex flex-col items-end">
//                 <div className="text-sm font-medium">{item.price}</div>
//                 <div
//                   className={`text-xs font-medium ${
//                     item.positive ? "text-green-500" : "text-red-500"
//                   }`}
//                 >
//                   {item.change}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }