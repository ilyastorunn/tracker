import { Separator } from "@/components/ui/separator";
import MarketCapWidget from "../components/custom/MarketCapWidget";
import NewsWidget from "../components/custom/NewsWidget";
import TrendingWidget from "../components/custom/TrendingWidget";
import Header from "../components/custom/Header";
import Footer from "../components/custom/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-background flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-3 gap-6 p-6">
          <div className="col-span-1">
            <NewsWidget />
          </div>
          <div className="col-span-2">
            <TrendingWidget />
          </div>
          {/* <Separator className="col-span-3 bg-border" /> */}
          <div className="col-span-3">
            <MarketCapWidget />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
