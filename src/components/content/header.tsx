import { useState } from "react";
import useMenus from "@/hooks/useMenus.ts";
import MyPic from "@/assets/images/hero-image.jpg";
import HeroTextPic from "@/assets/images/hero-text.svg";
import Logo from "@/assets/images/icons/Logo.svg";
const Header = () => {
  const { menuItem } = useMenus();

  const [open, setOpen] = useState(false);

  const handleScrollToSection = (name: string) => {
    const element = document.getElementsByClassName(name);

    element[0].scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <header className="relative border-b">
      <div className="text-white flex flex-col gap-8 mb-16">
        <div className="w-full flex justify-between items-center border-b h-20">
          <img src={Logo} alt="logo" className="z-40" />
          <ul className="md:flex hidden gap-10">
            {menuItem.map((item) => (
              <li className="w-fit cursor-pointer" key={item.id}>
                {/*<a*/}
                {/*  className="no-underline"*/}
                {/*  href={item.href}*/}
                {/*  onClick={(e) => e.preventDefault()}*/}
                {/*></a>*/}
                <h2
                  className={`text-2xl hover:text-primary duration-500 font-bellefair ${item.id == 1 && "text-primary"}`}
                  onClick={() => handleScrollToSection(item.name)}
                >
                  {item.name}
                </h2>
              </li>
            ))}
          </ul>
          <div
            className={`z-40 md:hidden flex items-center w-14 h-7 relative before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-white before:rounded-3xl before:duration-500 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-white after:rounded-3xl after:duration-500 ${open ? "before:top-[50%] before:-rotate-45 before:-translate-y-[50%] after:bottom-[50%] after:rotate-45 after:translate-y-[50%]" : "before:top-0 after:bottom-0"} cursor-pointer`}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`w-full h-0.5 bg-primary rounded-3xl ${open ? "hidden" : "block"}`}
            ></span>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-full">
            <img src={HeroTextPic} alt="hero-text" className="w-full" />
          </div>
          <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between">
            <div className="md:w-[49%] md:h-[600px] h-[300px] relative">
              <img
                src={MyPic}
                alt="Mr.MohammadMahdiGholipour"
                className="w-full h-full object-cover rounded-[30px] grayscale relative z-10"
              />
              <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 z-20 overflow-hidden rounded-[30px]">
                <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-my-pic bg-no-repeat bg-cover -translate-x-[3%] animate-[onAnimOne_2s_infinite_linear_alternate]"></div>
                <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-my-pic bg-no-repeat bg-cover translate-y-[5%] animate-[onAnimTwo_2.3s_-0.8s_infinite_linear_alternate]"></div>
                <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-my-pic bg-no-repeat bg-cover animate-[onAnimFlash_1s_infinite_linear]"></div>
              </div>
            </div>
            <div className="bg-secondary md:w-[49%] md:h-[600px] h-[500px] rounded-[30px] text-[#1C1C1C]">
              <p className="p-10 lg:text-3xl sm:text-2xl text-xl sm:max-w-xl max-w-2xl font-cabin">
                Crafting intuitive and visually appealing interfaces that
                enhance user experience through research, wireframes,
                prototypes, and high-fidelity designs. Translating designs into
                clean, responsive code using HTML, CSS, JavaScript, React and
                Next with expertise in Webflow, to create seamless and optimized
                web experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="transition-all duration-300">
          <ul className="fixed top-0 bottom-0 left-0 right-0 bg-[#1C1C1C] animate-[onAnimBurgerMenu_0.3s] pt-36 md:hidden flex flex-col items-center overflow-y-auto gap-6 z-30">
            {menuItem.map((item) => (
              <li className="w-fit cursor-pointer" key={item.id}>
                <h2
                  className={`text-2xl hover:text-primary duration-500 uppercase font-bellefair ${item.id == 1 ? "text-primary" : "text-white"}`}
                  onClick={() => handleScrollToSection(item.name)}
                >
                  {item.name}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
