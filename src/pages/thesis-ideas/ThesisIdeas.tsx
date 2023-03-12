import { useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { supabase } from "../../supabaseClient";
import { setDefaultResultOrder } from "dns";

function ThesisIdeas() {
  const [theses, setTheses] = useState<string[]>([]);
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [regenerate, setRegenerate] = useState<string[]>([]);

  useEffect(() => {
    if (regenerate.length > 0) {
      let newTheses = regenerate.map((item: any) => {
        return item.replaceAll("Source", "\nSource");
      });
      setTheses(newTheses);
    } else {
      let newTheses = location.state.data.map((item: any) => {
        return item.replaceAll("Source", "\nSource");
      });
      setTheses(newTheses);
      setBook(location.state.book);
      setAuthor(location.state.author);
    }
  }, [location, regenerate]);

  const regenerateTheses = async () => {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("generateTheses", {
      body: {
        thesisType: "BOOK_THESIS",
        authorName: author,
        workTitle: book,
      },
    });
    setLoading(false);
    setRegenerate(data);
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
          <h1>Thesis Statements</h1>
        </header>
      </section>

      <section>
        {theses.map((item) => (
          <div>
            <article style={{ padding: "0px" }}>
              <div
                style={{
                  display: "flex ",
                  gap: "5px",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    textAlign: "left",
                  }}
                >
                  <p style={{ margin: "0px" }}>{item}</p>
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px",
                  }}
                >
                  <button
                    style={{ height: "40%", margin: "auto" }}
                    className="outline"
                  >
                    <p style={{ margin: "0px", padding: "0px" }}>Save</p>
                  </button>
                </div> */}
              </div>

              <div
                style={{
                  position: "relative",
                  bottom: "0px",
                  marginTop: "10px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <button
                  style={{ width: "30%", height: "10%", margin: "auto" }}
                  className="outline"
                >
                  <p style={{ margin: "0px" }}>Get Essay Outline</p>
                </button>
                <button
                  style={{ width: "30%", height: "10%", margin: "auto" }}
                  className="outline"
                >
                  <p style={{ margin: "0px" }}>Save For Later</p>
                </button>
              </div>
            </article>
          </div>
        ))}
      </section>
      <section>
        <div>
          <button
            style={{ width: "50%", height: "10%", margin: "auto" }}
            className="outline"
            onClick={() => {
              regenerate.length > 0
                ? console.log("alsdjflkajsdlkf")
                : regenerateTheses();
            }}
          >
            <p style={{ margin: "0px" }}>
              Regenerate Theses (Can only be used once)
            </p>
          </button>
        </div>
      </section>
    </main>
  );
}

export default ThesisIdeas;
