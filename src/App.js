import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main className="app__hero">
        <article className="hero__option1 bg-properties">
          <header>
            <h1>Playstation 5</h1>
            <a href="#">buy now</a>
          </header>
        </article>
        <article className="hero__option2 bg-properties">
          <header>
            <h1>XBox Series X</h1>
            <a href="#">buy now</a>
          </header>
        </article>
      </main>
    </div>
  );
}
