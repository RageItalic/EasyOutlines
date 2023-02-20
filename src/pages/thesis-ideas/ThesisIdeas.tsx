import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const mock = {
  items: [1, 2, 3, 4],
};

function ThesisIdeas() {
  const [data, setData] = useState(mock);
  const location = useLocation();

  useEffect(() => {
    console.log("location ", location);
  }, []);

  return (
    <main className="container">
      <section>
        <header>
          <h1>Thesis Statements</h1>
        </header>
      </section>

      <section>
        <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: "30px",
        //   backgroundColor: "pink",
        // }}
        >
          <article
            style={
              {
                // maxWidth: "60%",
                // margin: "auto",
                //   minWidth: "40%",
                //   minHeight: "10%",
                //   maxHeight: "210px",
                //   display: "flex",
                //   justifyContent: "center",
                //   alignItems: "center",
                //   padding: 0,
              }
            }
          >
            Card
          </article>
          <article
          // style={{
          //   minWidth: "40%",
          //   minHeight: "10%",
          //   maxHeight: "210px",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   padding: 0,
          // }}
          >
            Card
          </article>
          <article
          // style={{
          //   minWidth: "40%",
          //   minHeight: "10%",
          //   maxHeight: "210px",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   padding: 0,
          // }}
          >
            Card
          </article>
          <article
          // style={{
          //   minWidth: "40%",
          //   minHeight: "10%",
          //   maxHeight: "210px",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   padding: 0,
          // }}
          >
            Card
          </article>
        </div>
      </section>
    </main>
  );
}

export default ThesisIdeas;
