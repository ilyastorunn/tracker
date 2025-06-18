import HomeBtnOne from "../components/custom/HomeBtnOne";
import exampleImg from "../assets/image.png";

export default function Home() {
  return (
    <div className="min-h-screen text-xxl bg-[#0D0D0D] text-[#F7FAFC]">
      <div className="flex flex-col items-center justify-center gap-[120px] pb-[120px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="text-[32px]">Track Your Currencies Easily.</span>
          <HomeBtnOne />
        </div>
        <img src={exampleImg} alt="example" />
      </div>

      <div className="flex flex-col items-center justify-center gap-[120px] pb-[120px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="text-[32px]">
            Check Out The Cryptocurrency You Want.
          </span>
          <span className="text-[18px]">
            Get an overview of your favorite currencies by effortlessly <br />
            examining real-time market data.
          </span>
        </div>
        <img src={exampleImg} alt="example" />
      </div>

      <div className="flex flex-col items-center justify-center gap-[120px] pb-[120px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="text-[32px]">Cath Up Trending Coins</span>
          <span className="text-[18px]">
            Analyze the notable changes in the coins
          </span>
        </div>
        <img src={exampleImg} alt="example" />
      </div>

      <div className="flex flex-col items-center justify-center gap-[120px] pb-[120px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="text-[32px]">Follow Daily News. 24/7.</span>
          <span className="text-[18px] justify-center items-center">
            Follow daily news from our news section. <br /> Read, bookmark and
            take notes.
          </span>
        </div>
        <img src={exampleImg} alt="example" />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 pb-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="text-[32px]">Make the right decision</span>
          <span className="text-[18px]">Try it now.</span>
        </div>
        <button
          type="submit"
          className="uppercase w-[140px] h-[58px] rounded-[14px] bg-[#0b0b10] text-[#F7FAFC] text-xl font-normal font-['Familjen_Grotesk'] flex items-center justify-center focus:outline-none border-none"
          style={{ letterSpacing: 0 }}
        >
          sign up
        </button>
      </div>
    </div>
  );
}
