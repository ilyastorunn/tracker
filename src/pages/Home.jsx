import { Separator } from "@/components/ui/separator";
import MarketCapWidget from "../components/custom/MarketCapWidget";
import NewsWidget from "../components/custom/NewsWidget";
import TrendingWidget from "../components/custom/TrendingWidget";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background flex justify-center">
      <div className="max-w-[1060px] w-full grid grid-cols-3 grid-rows-12 gap-[20px] p-4">
        <div className="col-span-1 bg-card p-4 rounded-lg shadow-lg">
          <NewsWidget />
        </div>
        <div className="col-span-2 bg-card p-4 rounded-lg shadow-lg">
          <TrendingWidget />
        </div>
        {/* <Separator className="col-span-3 bg-border" /> */}
        <div className="col-span-3 bg-card p-4 rounded-lg shadow-lg">
          <MarketCapWidget />
        </div>
      </div>
    </div>
  );
}
