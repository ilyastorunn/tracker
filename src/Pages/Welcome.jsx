import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-6 border-b border-[#222]">
        <div className="flex items-center gap-2">
          {/* Logo yerine placeholder SVG */}
          <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-white rounded-full flex items-center justify-center font-bold text-black">⚡</div>
          <span className="font-bold text-xl tracking-wide">HOME</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="uppercase cursor-pointer">HOME</span>
          <span className="uppercase cursor-pointer">CONTACT</span>
          <span className="uppercase cursor-pointer">LOGIN</span>
          <Button className="uppercase px-6 py-2 rounded-md bg-[#1A1A1A] border border-teal-300 text-white hover:bg-[#222]">sign up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-16 py-24 px-4 md:px-0">
        <div className="flex flex-col gap-10 max-w-md">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#F7FAFC]">Track your currencies easily.</h1>
          <Button size="lg" className="bg-[#0B0B10] border-2 border-teal-300 text-white rounded-md px-8 py-4 text-xl font-medium hover:bg-[#222]">SIGN UP FOR FREE!</Button>
        </div>
        <div className="w-[350px] h-[350px] bg-[#141424] rounded-xl flex items-center justify-center">
          {/* Görsel placeholder */}
          <span className="text-6xl text-[#4FD1C5]">💸</span>
        </div>
      </section>

      {/* Info Cards */}
      <section className="flex flex-col gap-16 md:gap-8 md:flex-row justify-center items-stretch px-4 md:px-0">
        {/* Card 1 */}
        <Card className="bg-[#1A1A1A] border-none max-w-sm flex-1">
          <CardContent className="flex flex-col gap-6 items-center py-10">
            <h2 className="text-2xl font-bold text-white text-center">Check Out The CryptoCurrency you want.</h2>
            <p className="text-base text-gray-300 text-center">Get an overview of your favorite currencies by effortlessly examining real-time market data.</p>
            <div className="w-full h-40 bg-[#141424] rounded-lg flex items-center justify-center">
              <span className="text-4xl text-[#4FD1C5]">📈</span>
            </div>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card className="bg-[#1A1A1A] border-none max-w-sm flex-1">
          <CardContent className="flex flex-col gap-6 items-center py-10">
            <h2 className="text-2xl font-bold text-white text-center">Catch Up Trending Coins</h2>
            <p className="text-base text-gray-300 text-center">Analyze the notable changes in the coins.</p>
            <div className="w-full h-40 bg-[#141424] rounded-lg flex items-center justify-center">
              <span className="text-4xl text-[#4FD1C5]">🚀</span>
            </div>
          </CardContent>
        </Card>
        {/* Card 3 */}
        <Card className="bg-[#1A1A1A] border-none max-w-sm flex-1">
          <CardContent className="flex flex-col gap-6 items-center py-10">
            <h2 className="text-2xl font-bold text-white text-center">Follow daily news. 24/7.</h2>
            <p className="text-base text-gray-300 text-center">Follow daily news from our news section. Read, bookmark and take notes.</p>
            <div className="w-full h-40 bg-[#141424] rounded-lg flex items-center justify-center">
              <span className="text-4xl text-[#4FD1C5]">📰</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center gap-6 py-24">
        <h2 className="text-3xl font-bold text-white">Make the right decision.</h2>
        <p className="text-lg text-gray-300">Try it now.</p>
        <Button size="lg" className="bg-[#0B0B10] border-2 border-teal-300 text-white rounded-md px-8 py-4 text-xl font-medium hover:bg-[#222]">SIGN UP</Button>
      </section>
    </div>
  );
}
