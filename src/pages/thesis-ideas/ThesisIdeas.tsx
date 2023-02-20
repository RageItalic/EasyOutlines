import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function ThesisIdeas() {
  const [data, setData] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    console.log("location ", location);
    let theses = location.state.data.map((item: any) => {
      return item.replaceAll("Source", "\nSource");
    });
    console.log("theses ", theses);
    setData(theses);
  }, []);

  return (
    <main className="container">
      <section>
        <header>
          <h1>Thesis Statements</h1>
        </header>
      </section>

      <section>
        {data.map((item) => (
          <div>
            <article>
              <p>{item}</p>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ThesisIdeas;
