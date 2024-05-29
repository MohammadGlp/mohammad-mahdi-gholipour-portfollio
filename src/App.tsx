import Header from "./components/content/header.tsx";
import Main from "@/components/content/main";
import Footer from "@/components/content/footer.tsx";

function App() {
  return (
    <div className="bg-[#1C1C1C] md:px-12 px-6">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
