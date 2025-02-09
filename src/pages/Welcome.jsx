import { Button } from "@/components/ui/button";
import example from "../assets/blackscreen.png";
import HeaderWelcome from "../components/custom/HeaderWelcome";
import Footer from "../components/custom/Footer";
import { Link } from "react-router";

export default function Welcome() {
  return (
    <>
      <HeaderWelcome />
      <div className="bg-background text-text-primary min-h-screen flex flex-col items-center space-y-16 px-4 py-12">
        <div className="text-center pb-24 pt-10">
          <h1 className="text-4xl font-bold mb-4">
            Track Your Currencies Easily.
          </h1>
          <Link to="/signup">
            <Button
              variant="default"
              className="px-6 py-3 bg-background text-text-primary rounded-full border border-[#5050FF] hover:border-[#7070FF] transition-all"
            >
              SIGN UP FOR FREE!
            </Button>
          </Link>
        </div>
        <div className="max-w-[1200px] w-full space-y-40">
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-5">
              Check Out The CryptoCurrency You Want.
            </h2>
            <p className="text-text-secondary mb-30">
              Get an overview of your favorite currencies by effortlessly
              examining real-time market data.
            </p>
            <div className="max-w-[880px] mx-auto aspect-[880/605] overflow-hidden">
              <img
                src={example}
                alt="example pic"
                className="w-full h-full object-cover rounded-lg pt-20"
              />
            </div>
          </section>
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-5">
              Catch Up Trending Coins
            </h2>
            <p className="text-text-secondary mb-30">
              Analyze the notable changes in the coins.
            </p>
            <div className="max-w-[880px] mx-auto aspect-[880/605] overflow-hidden">
              <img
                src={example}
                alt="example pic"
                className="w-full h-full object-cover rounded-lg pt-20"
              />
            </div>
          </section>
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-5">
              Follow daily news. 24/7.
            </h2>
            <p className="text-text-secondary mb-30">
              Follow daily news from our news section. Read, bookmark and take
              notes.
            </p>
            <div className="max-w-[880px] mx-auto aspect-[880/605] overflow-hidden">
              <img
                src={example}
                alt="example pic"
                className="w-full h-full object-cover rounded-lg pt-20"
              />
            </div>
          </section>
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-5">
              Make the right decision.
            </h2>
            <p className="text-text-secondary mb-5">Try it now</p>
            <Link to="/signup">
            <Button
              variant="default"
              className="px-6 py-3 bg-background text-text-primary rounded-full border border-[#5050FF] hover:border-[#7070FF] transition-all"
            >
              SIGN UP
            </Button>
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
