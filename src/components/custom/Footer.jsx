import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background text-text-secondary py-2">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">
        <Button className="text-sm pl-0">Made by ilyas torun</Button>
        <div className="flex space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
