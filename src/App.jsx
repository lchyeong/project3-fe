import React from "react";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <header className="bg-primary text-white p-4">
        <h1 className="text-center text-2xl">
          Responsive Layout with Fixed Width on PC
        </h1>
      </header>
      <main className="flex flex-col md:flex-row">
        <aside className="bg-secondary text-white p-4 w-full md:w-1/4">
          <nav>
            <ul>
              <li className="py-2">
                <a href="/">Link 1</a>
              </li>
              <li className="py-2">
                <a href="/">Link 2</a>
              </li>
              <li className="py-2">
                <a href="/">Link 3</a>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="flex-1 p-4">
          <h2 className="text-xl mb-4">Main Content</h2>
          <p>
            This is the main content area. The width of this content area will
            be fixed at 580px on PC.
          </p>
          <div className="w-full aspect-w-16 aspect-h-9">
            <img
              src="https://via.placeholder.com/800x450"
              alt="Placeholder"
              className="object-cover"
            />
          </div>
        </section>
      </main>
      <footer className="bg-primary text-white text-center p-4">
        <p>Footer Content</p>
      </footer>
    </Container>
  );
}

export default App;
