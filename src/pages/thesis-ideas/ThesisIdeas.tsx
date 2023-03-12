import { useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

function ThesisIdeas() {
  const [data, setData] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    let theses = location.state.data.map((item: any) => {
      return item.replaceAll("Source", "\nSource");
    });
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
