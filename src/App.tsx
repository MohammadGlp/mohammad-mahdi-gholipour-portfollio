import { useLayoutEffect, useRef } from "react";
import Header from "./components/content/header.tsx";
import Main from "@/components/content/main";
import Footer from "@/components/content/footer.tsx";

function App() {
  const mouseCti = useRef<HTMLDivElement | null>(null);

  const handleMouseCatcher = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    if (mouseCti.current) {
      mouseCti.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    }

    const innerCti = document.getElementById("#innerCti");
    if (innerCti) {
      innerCti.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    }
  };

  const handleMouseDown = () => {
    if (mouseCti.current) {
      mouseCti.current.style.width = "3.5rem";
      mouseCti.current.style.height = "3.5rem";
      mouseCti.current.style.opacity = "0.7";
    }
  };

  const handleMouseUp = () => {
    if (mouseCti.current) {
      mouseCti.current.style.width = "1.5rem";
      mouseCti.current.style.height = "1.5rem";
      mouseCti.current.style.opacity = "0.5";
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", handleMouseCatcher);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.addEventListener("mousemove", handleMouseCatcher);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
    };
  }, [mouseCti]);

  return (
    <>
      <div className="bg-[#1C1C1C] md:px-12 px-6">
        <Header />
        <Main />
        <Footer />
      </div>
      <div
        id="#innerCti"
        className="md:block hidden fixed top-0 left-0 w-14 h-14 border border-secondary rounded-full z-50 pointer-events-none translate-x-[-50%] translate-y-[-50%] transition-all ease-out duration-500"
      />
      <div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none bg-secondary opacity-50 rounded-full z-50 md:block hidden"
        style={{ transition: "width 0.3s, height 0.3s, opacity 0.3s" }}
        ref={mouseCti}
      />
    </>
  );
}

export default App;
