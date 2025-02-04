import { Separator } from "@/components/ui/separator"
import MarketCapWidget from "../components/custom/MarketCapWidget";
import NewsWidget from "../components/custom/NewsWidget";
import TrendingWidget from "../components/custom/TrendingWidget";

export default function Home() {
  return (
    <div className="bg-gray-800 mx-auto min-h-screen max-w-[1060px] grid grid-cols-3 grid-rows-12 gap-[20px]">
      <div className="col-span-1">
        <NewsWidget />
      </div>
      <div className="col-span-2">
        <TrendingWidget />
      </div>
      {/* <Separator /> */}
      <div className="col-span-3">
        <MarketCapWidget />
      </div>
    </div>
  );
}
