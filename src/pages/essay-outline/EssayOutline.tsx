import { useLoaderData } from "react-router-dom";

function EssayOutline() {
  const uuid = useLoaderData();

  return (
    <main className="container">
      <section>
        <header>
          <h1>Essay Outline PAGE: {uuid}</h1>
          <p>Check console message {"-->"} </p>
        </header>
      </section>
    </main>
  );
}

export default EssayOutline;
