/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#84FFBC",
        secondary: "#C8C6C3",
      },
      fontFamily: {
        boyan: ["Bayon", "sans"],
        bellefair: ["Bellefair", "sans"],
        bigilla: ["Bigilla", "sans"],
        cabin: ["Cabin", "sans"],
        chedar: ["Chedar", "sans"],
      },
    },
    backgroundImage: {
      "my-pic": "url('./src/assets/images/hero-image.jpg')",
    },
    keyframes: {
      onAnimFlash: {
        "0%": {
          opacity: 0.2,
        },
        "30%, 100%": {
          opacity: 0,
        },
      },
      onAnimOne: {
        "0%": {
          "-webkit-clip-path": "polygon(0 0%, 100% 0%, 100% 5%, 0 5%)",
          "clip-path": "polygon(0 0%, 100% 0%, 100% 5%, 0 5%)",
        },
        "10%": {
          "-webkit-clip-path": "polygon(0 15%, 100% 15%, 100% 15%, 0 15%)",
          "clip-path": "polygon(0 15%, 100% 15%, 100% 15%, 0 15%)",
        },
        "20%": {
          "-webkit-clip-path": "polygon(0 10%, 100% 10%, 100% 20%, 0 20%)",
          "clip-path": "polygon(0 10%, 100% 10%, 100% 20%, 0 20%)",
        },
        "30%": {
          "-webkit-clip-path": "polygon(0 1%, 100% 1%, 100% 2%, 0 2%)",
          "clip-path": "polygon(0 1%, 100% 1%, 100% 2%, 0 2%)",
        },
        "40%": {
          "-webkit-clip-path": "polygon(0 35%, 100% 35%, 100% 35%, 0 35%)",
          "clip-path": "polygon(0 35%, 100% 35%, 100% 35%, 0 35%)",
        },
        "50%": {
          "-webkit-clip-path": "polygon(0 45%, 100% 45%, 100% 46%, 0 46%)",
          "clip-path": "polygon(0 45%, 100% 45%, 100% 46%, 0 46%)",
        },
        "60%": {
          "-webkit-clip-path": "polygon(0 50%, 100% 50%, 100% 70%, 0 70%)",
          "clip-path": "polygon(0 50%, 100% 50%, 100% 70%, 0 70%)",
        },
        "70%": {
          "-webkit-clip-path": "polygon(0 70%, 100% 70%, 100% 70%, 0 70%)",
          "clip-path": "polygon(0 70%, 100% 70%, 100% 70%, 0 70%)",
        },
        "80%": {
          "-webkit-clip-path": "polygon(0 80%, 100% 80%, 100% 80%, 0 80%)",
          "clip-path": "polygon(0 80%, 100% 80%, 100% 80%, 0 80%)",
        },
        "90%": {
          "-webkit-clip-path": "polygon(0 50%, 100% 50%, 100% 55%, 0 55%)",
          "clip-path": "polygon(0 50%, 100% 50%, 100% 55%, 0 55%)",
        },
        "100%": {
          "-webkit-clip-path": "polygon(0 60%, 100% 60%, 100% 70%, 0 70%)",
          "clip-path": "polygon(0 60%, 100% 60%, 100% 70%, 0 70%)",
        },
      },
      onAnimTwo: {
        "0%": {
          "-webkit-clip-path": "polygon(0 15%, 100% 15%, 100% 30%, 0 30%)",
          "clip-path": "polygon(0 15%, 100% 15%, 100% 30%, 0 30%)",
        },
        "15%": {
          "-webkit-clip-path": "polygon(0 3%, 100% 3%, 100% 3%, 0 3%)",
          "clip-path": "polygon(0 3%, 100% 3%, 100% 3%, 0 3%)",
        },
        "25%": {
          "-webkit-clip-path": "polygon(0 8%, 100% 8%, 100% 20%, 0 20%)",
          "clip-path": "polygon(0 8%, 100% 8%, 100% 20%, 0 20%)",
        },
        "30%": {
          "-webkit-clip-path": "polygon(0 20%, 100% 20%, 100% 20%, 0 20%)",
          "clip-path": "polygon(0 20%, 100% 20%, 100% 20%, 0 20%)",
        },
        "45%": {
          "-webkit-clip-path": "polygon(0 45%, 100% 45%, 100% 45%, 0 45%)",
          "clip-path": "polygon(0 45%, 100% 45%, 100% 45%, 0 45%)",
        },
        "50%": {
          "-webkit-clip-path": "polygon(0 50%, 100% 50%, 100% 57%, 0 57%)",
          "clip-path": "polygon(0 50%, 100% 50%, 100% 57%, 0 57%)",
        },
        "65%": {
          "-webkit-clip-path": "polygon(0 60%, 100% 60%, 100% 60%, 0 60%)",
          "clip-path": "polygon(0 60%, 100% 60%, 100% 60%, 0 60%)",
        },
        "75%": {
          "-webkit-clip-path": "polygon(0 80%, 100% 80%, 100% 80%, 0 80%)",
          "clip-path": "polygon(0 80%, 100% 80%, 100% 80%, 0 80%)",
        },
        "80%": {
          "-webkit-clip-path": "polygon(0 40%, 100% 40%, 100% 60%, 0 60%)",
          "clip-path": "polygon(0 40%, 100% 40%, 100% 60%, 0 60%)",
        },
        "95%": {
          "-webkit-clip-path": "polygon(0 45%, 100% 45%, 100% 60%, 0 60%)",
          "clip-path": "polygon(0 45%, 100% 45%, 100% 60%, 0 60%)",
        },
        "100%": {
          "-webkit-clip-path": "polygon(0 11%, 100% 11%, 100% 15%, 0 15%)",
          "clip-path": "polygon(0 11%, 100% 11%, 100% 15%, 0 15%)",
        },
      },
      onAnimShake: {
        "0%": {
          transform: "translate(1px, 1px) rotate(0deg)",
        },
        "10%": {
          transform: "translate(-1px, -2px) rotate(-1deg)",
        },
        "20%": {
          transform: "translate(-3px, 0px) rotate(1deg)",
        },
        "30%": {
          transform: "translate(3px, 2px) rotate(0deg)",
        },
        "40%": {
          transform: "translate(1px, -1px) rotate(1deg)",
        },
        "50%": {
          transform: "translate(-1px, 2px) rotate(-1deg)",
        },
        "60%": {
          transform: "translate(-3px, 1px) rotate(0deg)",
        },
        "70%": {
          transform: "translate(3px, 1px) rotate(-1deg)",
        },
        "80%": {
          transform: "translate(-1px, -1px) rotate(1deg)",
        },
        "90%": {
          transform: "translate(1px, 2px) rotate(0deg)",
        },
        "100%": {
          transform: "translate(1px, -2px) rotate(-1deg)",
        },
      },
      onAnimBurgerMenu: {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
    },
  },
  plugins: [],
};
