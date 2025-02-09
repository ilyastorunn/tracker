import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-background text-text-secondary py-2">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">
        <a href="https://ilyas-dev.vercel.app/" target="_blank">
        <Button className="text-sm pl-0">Made by ilyas torun</Button>
        </a>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ilyastorunn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ilyastorunn/"
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
