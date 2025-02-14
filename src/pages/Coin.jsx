import Chart from "../components/custom/Chart";
import Converter from "../components/custom/Converter";
import Gpt from "../components/custom/Gpt";
import Header from "../components/custom/Header";
import Info from "../components/custom/Info";
import OHLC from "../components/custom/OHLC";
import Footer from "../components/custom/Footer";

export default function Coin() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-text-primary py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <Chart />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OHLC />
            <Converter />
          </div>
          <Gpt />
          <Info />
        </div>
      </div>
      <Footer />
    </>
  );
}
