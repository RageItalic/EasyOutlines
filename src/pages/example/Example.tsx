import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useLocation } from "react-router-dom";
import "./Example.css";

function Example() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTodoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.functions.invoke("test", {
      body: {
        name: title,
      },
    });
    console.log("look at data", data);
  };

  return (
    <main className="container">
      <section>
        <header>Example Edge Function Call</header>
      </section>
      <section>
        <main className="container">
          <form onSubmit={(e) => handleTodoSubmit(e)}>
            <input
              type="text"
              placeholder="Example Submit to test edge function"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Example Submit</button>
          </form>
        </main>
      </section>
      <section>
        <footer>
          <p>
            This component is also an example of how to structure a component
            using pico css.
          </p>
          <a href="https://picocss.com/docs/">Docs for pico css are here.</a>
        </footer>
      </section>
    </main>
  );
}

export default Example;
