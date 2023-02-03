import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="container">
      <section>
        <header>
          <h1 className="homeTitle">HOME PAGE</h1>
        </header>
      </section>
      <section>
        <form>
          <div className="grid">
            <div>
              <h2>FOR BOOKS:</h2>
              <p>I Need Thesis Ideas On The Book: </p>
              <input
                type="text"
                id="bookName"
                name="bookName"
                placeholder="Book Name"
                required
              />
              <p>Written By: </p>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Author"
                required
              />
            </div>
            <div>
              <h2>FOR MORE ABSTRACT TOPICS:</h2>
              <p>I Need Thesis Ideas On: </p>
              <input
                type="text"
                id="abstractTopic"
                name="abstractTopic"
                placeholder="Topic"
                required
              />
            </div>
          </div>
          <button className="outline submitBtn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default Home;
