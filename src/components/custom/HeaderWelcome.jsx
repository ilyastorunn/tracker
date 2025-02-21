import { Button } from "@/components/ui/button";
import { IoFingerPrintOutline } from "react-icons/io5";
import { Link } from "react-router";
import { TbCoinRupee } from "react-icons/tb";

export default function HeaderWelcome() {
  return (
    <header className="bg-background text-text-primary w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4">
          <TbCoinRupee />
          <nav className="flex items-center space-x-4">
            <Link to="/home">
              <Button href="#" className="hover:text-primary">
                HOME
              </Button>
            </Link>
            <Link to="/contact">
              <Button href="#" className="hover:text-primary">
                CONTACT
              </Button>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/signin">
            <Button className="bg-transparent border-none hover:bg-muted/80 text-white rounded-full px-4 py-2">
              <IoFingerPrintOutline />
              LOGIN
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-transparent border-2 border-border hover:bg-muted/80 text-white rounded-full px-4 py-2">
              SIGN UP
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
