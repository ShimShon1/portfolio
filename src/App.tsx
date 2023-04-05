import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <header className="bg-sky-700 w-full p-3 lg:p-4 px-6 shadow-md sticky top-0 lg:px-12">
        <Nav />
      </header>
      <main className="min-h-screen bg-gray-200"></main>
    </>
  );
}
