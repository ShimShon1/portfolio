import About from "./components/About";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <header className="sticky top-0 w-full bg-sky-700 p-3 px-6 shadow-md lg:p-4 lg:px-12">
        <Nav />
      </header>
      <div className=" min-h-screen bg-gray-50">
        <main className=" m-auto w-full p-4  md:w-5/6 ">
          <About />
        </main>
      </div>
    </>
  );
}
