import { Github } from "@/assets/images/icons/github.tsx";
import { Instagram } from "@/assets/images/icons/instagram.tsx";
import { Telegram } from "@/assets/images/icons/Telegram.tsx";
import { Linkedin } from "@/assets/images/icons/linkedin.tsx";

const Contact = () => {
  return (
    <section className="contact text-white border-b md:pb-72 pb-32">
      <h1 className="font-boyan lg:text-8xl md:text-7xl text-6xl sm:text-right text-center text-secondary xl:mb-36 md:mb-28 mb-20">
        contact
      </h1>
      <div className="flex flex-col md:gap-44 gap-20">
        <p className="2xl:text-[160px]/10 xl:text-8xl md:text-[82px] sm:text-6xl text-[40px] text-secondary font-bigilla">
          Send me an{" "}
          <a
            className="no-underline text-primary border-b border-[rgba(200, 198, 195, 0.5)] hover:border-primary ease-in-out duration-300 pb-5"
            href="mailto:mohammadmahdi.gholipour@gmail.com"
          >
            e-mail
          </a>
        </p>
        <div className="flex lg:flex-row flex-wrap lg:justify-normal justify-center sm:gap-12 gap-8">
          <a
            className="w-fit no-underline hover:lg:animate-[onAnimShake_0.5s] hover:opacity-50"
            href="https://github.com/MohammadGlp"
            target="_blank"
          >
            <Github />
          </a>
          <a
            className="w-fit no-underline hover:lg:animate-[onAnimShake_0.5s] hover:opacity-50"
            href="https://www.instagram.com/mhmad_glp/"
            target="_blank"
          >
            <Instagram />
          </a>
          <a
            className="w-fit no-underline hover:lg:animate-[onAnimShake_0.5s] hover:opacity-50"
            href="https://t.me/M_G_SARI"
            target="_blank"
          >
            <Telegram />
          </a>
          <a
            className="w-fit no-underline hover:lg:animate-[onAnimShake_0.5s] hover:opacity-50"
            href="https://www.linkedin.com/in/maziyar-gholipour-a502b3220/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
