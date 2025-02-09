import { Button } from "@/components/ui/button";

export default function HeaderWelcome() {
  return (
    <header className="bg-background text-text-primary w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4">
          {/* <svg
            viewBox="-1 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#111111"
            className="w-8 h-8"
          >
            <g id="SVGRepo_iconCarrier">
              <title>lightning [#1261]</title>
              <path d="M49.27,2409 L53,2404.524 L53,2409 L49.27,2409 Z M55,2409 L58.73,2409 L55,2413.476 L55,2409 Z M63,2407 L55,2407 L55,2399 L45,2411 L53,2411 L53,2419 L63,2407 Z"></path>
            </g>
          </svg> */}
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
            <Button href="#" className="hover:text-primary">
              HOME
            </Button>
            <Button href="#" className="hover:text-primary">
              CONTACT
            </Button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button href="#" className="hover:text-primary transition">
            <svg
              fill="#FFFFFF"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <g id="SVGRepo_iconCarrier">
                <path d="M7.7 4.7C9.36 3.07 12.68 2 16.17 2S23 3.06 24.6 4.7A1 1 0 0 0 26 3.3C23.6.86 19.34 0 16.16 0S8.72.87 6.3 3.3a1 1 0 0 0 1.4 1.4zM29.2 12.55C26.38 6.88 22 4 16.17 4s-10.22 2.88-13 8.55a1 1 0 0 0 .44 1.34 1 1 0 0 0 1.35-.45C7.4 8.45 11.08 6 16.15 6s8.77 2.44 11.27 7.45a1 1 0 0 0 .9.55.87.87 0 0 0 .44-.1 1 1 0 0 0 .45-1.35zM19.4 28.08c-4.13-1.77-5.8-4.5-6-6.5a2.87 2.87 0 0 1 1.13-2.75c.85-.57 2.1.24 3.87 1.52s4.13 3 6.17 1.45c1.8-1.35 2.34-3.76 1.45-6.44A10.85 10.85 0 0 0 16.16 8C7.2 8 4 15.75 4 23a1 1 0 0 0 2 0c0-3 .73-13 10.16-13 3.9 0 7 3.1 8 6 .3.87.8 3-.75 4.2-.8.6-2-.2-3.8-1.47s-4.07-2.94-6.14-1.56a4.87 4.87 0 0 0-2 4.6c.24 2.56 2.24 6 7.18 8.15A1 1 0 0 0 19 30a1 1 0 0 0 .4-1.92zM10 19.24a7.06 7.06 0 0 1 5.2-4.65c2.24-.43 4.32.6 6 3a1 1 0 1 0 1.62-1.17c-2.9-4.07-6.27-4.12-8-3.8A9.1 9.1 0 0 0 8 18.77c-1 3.94.43 8.27 4.2 12.87a1 1 0 0 0 .8.37.94.94 0 0 0 .63-.23 1 1 0 0 0 .14-1.4c-3.34-4.1-4.62-7.83-3.77-11.13zM25.3 24.3a3 3 0 0 1-3.06.63c-2.4-.57-4.78-2.7-5.3-4.25a1 1 0 1 0-1.9.64c.8 2.33 3.87 4.88 6.74 5.56a6.84 6.84 0 0 0 1.52.18 4.7 4.7 0 0 0 3.4-1.35 1 1 0 0 0-1.4-1.4z"></path>
              </g>
            </svg>
            LOGIN
          </Button>
          <Button className="bg-[#1F5AB0] hover:bg-primary text-white rounded-full px-4 py-2">
            SIGN UP
          </Button>
        </div>
      </div>
    </header>
  );
}
