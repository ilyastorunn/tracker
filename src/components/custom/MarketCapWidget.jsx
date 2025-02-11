import { Card, CardContent, CardHeader } from "@/components/ui/card";
import logo from "../../assets/Bitcoin.svg";

export default function MarketCapWidget() {
  const trendingItems = [
    //volumes are 24h
    {
      logo: logo,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$69,155.05",
      volume: "$18,472,988,552",
      marketCap: "$1,363,719,303,130",
      change: "1.7%",
      positive: true,
    },
    {
      logo: logo,
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,764.80",
      volume: "$11,274,311,729",
      marketCap: "$453,117,195,184",
      change: "0.6%",
      positive: false,
    },
    {
      logo: logo,
      name: "Tether",
      symbol: "USDT",
      price: "$0.9994",
      volume: "$40,718,509,301",
      marketCap: "$112,106,310,191",
      change: "0.1%",
      positive: true,
    },
    {
      logo: logo,
      name: "Bnb",
      symbol: "BNB",
      price: "$623.46",
      volume: "$2,064,994,633",
      marketCap: "$96,177,578,304",
      change: "3.9%",
      positive: true,
    },
  ];

  return (
    <Card className="w-full h-full min-h-[250px] bg-card text-text-primary shadow-lg p-6 rounded-lg border-none">
      <CardHeader>
        <h2 className="text-lg font-semibold mb-4">Currencies by Market Cap</h2>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {trendingItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center gap-4 px-4"
            >
              <div className="col-span-2 flex items-center gap-2">
                <img className="w-4 h-4" src={item.logo} alt={item.name} />
                <div className="flex flex-col">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-text-secondary">{item.symbol}</div>
                </div>
              </div>
              <div className="col-span-1 text-sm font-medium">{item.price}</div>
              <div
                className={`col-span-1 text-xs font-medium ${
                  item.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.change}
              </div>
              <div className="col-span-1 text-sm font-medium">{item.volume}</div>
              <div className="col-span-1 text-sm font-medium">{item.marketCap}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
