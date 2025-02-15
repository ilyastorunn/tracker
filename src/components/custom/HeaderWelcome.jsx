import { Button } from "@/components/ui/button";
import { IoFingerPrintOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function HeaderWelcome() {
  return (
    <header className="bg-background text-text-primary w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-6 h-6"
          >
            <g id="SVGRepo_iconCarrier">
              <circle cx="16" cy="16" r="14.5" fill="#1AD2A4"></circle>
              <path
                d="M16,31C7.73,31,1,24.27,1,16S7.73,1,16,1s15,6.73,15,15S24.27,31,16,31z M16,2 C8.28,2,2,8.28,2,16s6.28,14,14,14s14-6.28,14-14S23.72,2,16,2z"
                fill="#37474F"
              ></path>
              <path
                d="M16,18c-3.53,0-9.5-0.53-9.5-2.5c0-1.94,5.77-2.37,7.54-2.45 c0.31-0.02,0.51,0.2,0.52,0.48c0.01,0.28-0.2,0.51-0.47,0.52c-4.37,0.21-6.48,1.07-6.59,1.46C7.65,16.02,10.7,17,16,17 s8.35-0.98,8.5-1.51c-0.11-0.37-2.2-1.22-6.53-1.44c-0.28-0.01-0.49-0.25-0.47-0.52c0.01-0.27,0.22-0.5,0.52-0.47 c1.75,0.09,7.48,0.53,7.48,2.45C25.5,17.47,19.53,18,16,18z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M22.5,10h-13C9.22,10,9,9.78,9,9.5S9.22,9,9.5,9h13C22.78,9,23,9.22,23,9.5 S22.78,10,22.5,10z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M16,24.5c-0.28,0-0.5-0.22-0.5-0.5v-6.5c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5V24 C16.5,24.28,16.28,24.5,16,24.5z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M16,16c-0.28,0-0.5-0.22-0.5-0.5v-6C15.5,9.22,15.72,9,16,9s0.5,0.22,0.5,0.5v6 C16.5,15.78,16.28,16,16,16z"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
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
            <Button className="hover:text-primary transition">
              <IoFingerPrintOutline />
              LOGIN
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-[#1F5AB0] hover:bg-primary text-white rounded-full px-4 py-2">
              SIGN UP
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
