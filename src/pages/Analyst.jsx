import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoMdSend } from "react-icons/io";
import Header from "../components/custom/Header";
import Footer from "../components/custom/Footer";

export default function Analyst() {
  const [question, setQuestion] = useState("");

  const exampleQuestions = [
    "What are the latest trends in crypto?",
    "How will Bitcoin perform this year?",
    "Should I invest in Ethereum now?",
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text-primary px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">
            Your Personal Analyst. 24/7.
          </h1>
          <p className="text-muted-foreground mt-2">
            Ask anything about market trends, cryptocurrencies, and investment
            strategies.
          </p>
        </div>
        <div className="w-full max-w-4xl bg-card p-8 rounded-lg shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gpt-gradient rounded-lg blur-3xl opacity-30" />
          <div className="mb-8 space-y-4">
            {exampleQuestions.map((q, index) => (
              <p
                key={index}
                className="text-lg cursor-pointer hover:text-white transition"
                onClick={() => setQuestion(q)}
              >
                ➤ {q}
              </p>
            ))}
          </div>
          <div className="bg-transparent p-6 rounded-lg min-h-[300px] flex flex-col justify-end">
            <div className="flex-grow"></div>
            <div className="relative mt-4">
              <Input
                type="text"
                placeholder="Ask about Bitcoin, Ethereum, or market trends..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full py-6 px-4 pr-20 bg-background text-text-primary focus:outline-none rounded-full mx-auto"
              />
              <Button className="absolute right-1 top-[50%] transform -translate-y-[50%] bg-muted hover:bg-muted/80 p-3 rounded-full">
                <IoMdSend className="w-4 h-4 text-text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
