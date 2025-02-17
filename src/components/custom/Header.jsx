import { Button } from "@/components/ui/button";
import { FaViacoin } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-background text-text-primary w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
        <FaViacoin className="w-6 h-6" />

        <nav className="flex space-x-6">
          <Link to="/home">
            <Button href="" className="hover:text-primary transition">
              Home
            </Button>
          </Link>
          <Button href="" className="hover:text-primary transition">
            Search
          </Button>
          <Link to="/news">
            <Button href="" className="hover:text-primary transition">
              Read
            </Button>
          </Link>
          <Link to="/analyst">
            <Button href="" className="hover:text-primary transition">
              Analyst
            </Button>
          </Link>
          <Button href="" className="hover:text-primary transition">
            Favorites
          </Button>
        </nav>
        <CgProfile className="w-6 h-6" />
      </div>
    </header>
  );
}
