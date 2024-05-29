import Javascript from "@/assets/images/icons/Javascript.svg";
import Html from "@/assets/images/icons/html.svg";
import Css from "@/assets/images/icons/css.svg";
import Next from "@/assets/images/icons/next.svg";
import Reactjs from "@/assets/images/icons/React.svg";
import Typescript from "@/assets/images/icons/Typescript.svg";
const About = () => {
  return (
    <section className="about mt-20">
      <div className="text-secondary">
        <h1 className="font-boyan lg:text-8xl md:text-7xl text-6xl sm:text-right text-center text-secondary mb-10">
          about
        </h1>
        <div className="flex md:flex-row flex-col md:justify-between gap-2 border-b border-secondary pb-40">
          <div className="font-cabin opacity-90 xl:text-4xl/[50px] lg:text-3xl text-xl tracking-wide w-full lg:max-w-[935px] max-w-lg">
            <p className="md:text-6xl text-4xl pb-12">Hello!</p>
            <p className="pb-10">
              My name is Mohammad, and I work as Web Developer and Programmer.
              In my work, I focus on a client’s needs. Together, we will design
              and put your website online. I’m also familiar with the AI
              instruments and using these for my works sometimes. A little
              experience of working as UI/UX in the design helped me achieve
              better understanding of how visual content works.
            </p>
            <p className="pb-10">
              {" "}
              If you want to work with me, or have any questions – <br />
              drop a{" "}
              <a
                href="mohammadmahdi.gholipour@gmail.com"
                className="no-underline ease-in duration-300 text-white hover:text-primary"
              >
                message
              </a>
              . See you on your project!
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-3 gap-8 h-fit self-center">
            {/*<div className="about__icons-left"></div><div className="about__icons-right"> </div>*/}
            <img
              className="w-fit h-fit hover:animate-[onAnimShake_0.5s]"
              src={Html}
              alt="html"
            />
            <img
              className="w-fit h-fit hover:animate-[onAnimShake_0.5s]"
              src={Css}
              alt="css"
            />
            <img
              className="w-fit h-fit hover:animate-[onAnimShake_0.5s]"
              src={Javascript}
              alt="javascript"
            />

            <img
              className="w-fit h-fit hover:animate-[onAnimShake_0.5s]"
              src={Typescript}
              alt="typescript"
            />
            <img
              className="w-fit h-fit hover:animate-[onAnimShake_0.5s]"
              src={Reactjs}
              alt="react"
            />
            <img
              className="w-fit h-fit hover:animate-[onAnimShake_0.5s]"
              src={Next}
              alt="next"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
