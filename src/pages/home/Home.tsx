import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { supabase } from "../../supabaseClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [author, setAuthor] = useState("");
  const [book, setBook] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("generateTheses", {
      body: {
        thesisType: "BOOK_THESIS",
        authorName: author,
        workTitle: book,
      },
    });
    setLoading(false);
    let path = `thesis-ideas`;
    navigate(path, { state: { data } });
  };

  if (loading) {
    return (
      <main className="container">
        <section>
          <header>Loading...</header>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <section>
        <header>
          <h2>HOME PAGE</h2>
        </header>
      </section>
      <section>
        <div className="grid">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <h3>FOR BOOKS:</h3>
              <p>I Need Thesis Ideas On The Book: </p>
              <input
                type="text"
                id="bookName"
                name="bookName"
                placeholder="Book Name"
                value={book}
                onChange={(e) => setBook(e.target.value)}
                required
              />
              <p>Written By: </p>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
              <button
                className="outline submitBtn"
                type="submit"
                style={{ width: "40%", margin: "auto", marginTop: 20 }}
              >
                Submit
              </button>
            </div>
          </form>
          <div>
            <form>
              <h3>FOR MORE ABSTRACT TOPICS:</h3>
              <p>I Need Thesis Ideas On: </p>
              <input
                type="text"
                id="abstractTopic"
                name="abstractTopic"
                placeholder="Topic"
                required
              />
              <button
                className="outline submitBtn"
                type="submit"
                style={{ width: "40%", margin: "auto", marginTop: 20 }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
