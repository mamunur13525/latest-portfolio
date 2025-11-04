import HomePage from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Blogs from "./components/pages/blogs";

export default function Home() {
  return (
    <section className="w-full min-h-screen h-screen  bg-[#022c43] overflow-y-auto px-[5%] py-0">
      <HomePage />
      <About />
      <Skills />
      <Blogs />
    </section>
  );
}
