/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gpt-gradient': 'radial-gradient(circle, rgba(255,255,255,0.15) 30%, rgba(18,18,18,1) 100%)',
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      colors: {
        // **Ana Arka Planlar**
        background: "#121212",
        foreground: "#EAEAEA",

        // **Kart ve UI Arkaplanları**
        card: "#1E1E1E",
        popover: "#242424",

        // **Metin Renkleri**
        text: {
          primary: "#E5E5E5", // Daha koyu beyaz
          secondary: "#B0B0B0",
        },

        // **UI ve Buton Renkleri**
        muted: {
          DEFAULT: "#2D2D2D",
          foreground: "#A3A3A3",
        },
        accent: {
          DEFAULT: "#3B3B3B",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#E63946",
          foreground: "#FFFFFF",
        },

        // **Özel Renkler**
        border: "#333333",
        input: "#252525",
        ring: "#444444",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
