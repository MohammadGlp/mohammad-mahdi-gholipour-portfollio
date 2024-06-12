import useMenus from "@/hooks/useMenus.ts";

const Works = () => {
  const { workItems } = useMenus();

  return (
    <section className="works">
      <div className="border-b pb-40">
        <h1 className="font-boyan lg:text-8xl md:text-7xl text-6xl sm:text-right text-center text-secondary mb-24">
          works
        </h1>
        <div className="flex flex-col sm:gap-40 gap-20">
          {workItems.map((item) => (
            <div
              className={`flex ${item.id % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"} flex-col-reverse justify-between gap-4`}
              key={item.id}
            >
              <div className="relative lg:w-[1010px] lg:h-[606px] md:w-[800px] md:h-[406px] sm:w-[600px] sm:h-[306px]  bg-black rounded-3xl z-10 group">
                <a className="no-underline" href={item.href} target="_blank">
                  <img
                    src={item.imageUrl}
                    alt="project-1"
                    className="w-full h-full rounded-3xl filter sm:scale-[0.9] group-hover:sm:scale-[1] ease-in duration-300 bg-blend-overlay opacity-70"
                  />

                  <h3
                    className={`absolute top-[60%] bottom-[30%] ${item.id % 2 === 0 ? "2xl:-left-96 xl:-left-72 md:-left-32 sm:-left-40 -left-20" : "2xl:-right-96 xl:-right-72 md:-right-32 sm:-right-40 -right-20"} text-white font-bigilla group-hover:text-primary ease-in duration-300 lg:text-9xl sm:text-7xl text-4xl z-20 hidden sm:block`}
                  >
                    {item.name}
                  </h3>
                </a>
              </div>
              <h2 className="w-32 h-fit pt-3 text-white/50 font-bellefair uppercase lg:text-5xl sm:text-2xl text-base text-wrap hover:animate-[onAnimShake_0.5s]">
                {item.field}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex md:justify-end justify-center">
          <p className="font-cabin text-secondary md:text-5xl text-3xl w-fit mt-56 pb-6 border-b-4 border-b-transparent hover:text-primary hover:border-b-4 hover:border-b-primary ease-in duration-300">
            <a
              href="https://github.com/MohammadGlp"
              className="no-underline"
              target="_blank"
            >
              more projects {">>>"}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
