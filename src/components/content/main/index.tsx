import About from "@/components/content/main/about.tsx";
import Contact from "@/components/content/main/contact.tsx";
import Works from "@/components/content/main/works.tsx";

const Main = () => {
  return (
    <div className="flex flex-col gap-28 mt-4">
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default Main;
