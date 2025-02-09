import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background text-text-primary w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
        {/* <svg
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#FFFFFF"
          className="w-6 h-6"
        >
          <g id="SVGRepo_iconCarrier">
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
        <nav className="flex space-x-6">
          <Button href="" className="hover:text-primary transition">
            Cryptocurrencies
          </Button>
          <Button href="" className="hover:text-primary transition">
            Search
          </Button>
          <Button href="" className="hover:text-primary transition">
            Read
          </Button>
          <Button href="" className="hover:text-primary transition">
            Analyst
          </Button>
          <Button href="" className="hover:text-primary transition">
            Favorites
          </Button>
        </nav>
        <svg
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#FFFFFF"
          className="w-6 h-6"
        >
          <g id="SVGRepo_iconCarrier">
            <path d="M12 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM12 14c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"></path>
          </g>
        </svg>
      </div>
    </header>
  );
}

{
  /* <svg
  viewBox="0 0 24.00 24.00"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  stroke="#000000"
  stroke-width="0.00024000000000000003"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    {" "}
    <g clip-path="url(#clip0_15_82)">
      {" "}
      <rect width="24" height="24" fill="white"></rect>{" "}
      <g filter="url(#filter0_d_15_82)">
        {" "}
        <path
          d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
          fill="#000000"
        ></path>{" "}
      </g>{" "}
    </g>{" "}
    <defs>
      {" "}
      <filter
        id="filter0_d_15_82"
        x="2.55444"
        y="3.5"
        width="18.8911"
        height="19"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        {" "}
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>{" "}
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        ></feColorMatrix>{" "}
        <feOffset dy="1"></feOffset>{" "}
        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>{" "}
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        ></feColorMatrix>{" "}
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_15_82"
        ></feBlend>{" "}
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_15_82"
          result="shape"
        ></feBlend>{" "}
      </filter>{" "}
      <clipPath id="clip0_15_82">
        {" "}
        <rect width="24" height="24" fill="white"></rect>{" "}
      </clipPath>{" "}
    </defs>{" "}
  </g>
</svg>; */
}
