import HomeBtnOne from "../components/custom/HomeBtnOne";
import exampleImg from "../assets/image.png";

export default function Home() {
  return (
    <div className="min-h-screen text-xxl bg-[#0D0D0D] text-[#F7FAFC]">
      <div className="flex flex-col items-center justify-center gap-[120px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="text-[32px]">Track Your Currencies Easily.</span>
          <HomeBtnOne />
        </div>
        <img src={exampleImg} alt="example" />
      </div>
    </div>
  );
}
