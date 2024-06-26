import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <div className="sticky top-0 w-full bg-sky-800 p-3 px-6 shadow-md lg:p-4 lg:px-12">
        <Nav />
      </div>
      <div className="  bg-gray-50 text-center text-sky-800">
        <main className=" m-auto w-full space-y-10  p-4 md:w-[75%] lg:w-[65%] xl:w-[60%]">
          <About />

          <Projects />

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
