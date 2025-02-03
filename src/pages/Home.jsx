import NewsWidget from "../components/custom/NewsWidget";
import TrendingWidget from "../components/custom/TrendingWidget";

export default function Home() {
  return (
    <div className="mx-auto grid min-h-screen max-w-[1060px] grid-cols-12 gap-[20px]">
        <NewsWidget className="col-span-6" />
        <TrendingWidget className="col-span-6" />
    </div>
  );
}
