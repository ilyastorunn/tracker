import { AiOutlineOpenAI } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

export default function AiAssistant() {
  return (
    <div className="bg-gpt-gradient p-6 rounded-lg shadow-lg mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Ask GPT-4o!</h3>
        <AiOutlineOpenAI className="w-6 h-6 text-text-primary" />
      </div>
      <ul className="text-text-primary space-y-4 mb-8">
        <li className="cursor-pointer hover:text-text-primary">
          ➤ What&apos;s the latest news on Ethereum?
        </li>
        <li className="cursor-pointer hover:text-text-primary">
          ➤ What&apos;s the latest news on Ethereum?
        </li>
        <li className="cursor-pointer hover:text-text-primary">
          ➤ What&apos;s the latest news on Ethereum?
        </li>
      </ul>
      <div className="relative pt-[60px]">
        <input
          type="text"
          placeholder="Ask something..."
          className="w-full p-4 rounded-full bg-input text-text-primary focus:outline-none"
        />
        <button className="absolute right-4 top-[75%] transform -translate-y-[50%] bg-muted p-2 rounded-full hover:bg-muted/80">
          <IoMdSend className="w-4 h-4 text-text-primary" />
        </button>
      </div>
    </div>
  );
}
