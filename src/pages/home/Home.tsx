import {Link} from 'react-router-dom'

function Home() {
  return (
    <main className="container">
      <section>
        <header>
          <h1>HOME PAGE</h1>
          <Link to="/example">Example Page</Link>
        </header>
      </section>
      <section>
        <footer>
          <a href="https://reactrouter.com/en/main/routers/create-browser-router">We are using React Router V6. Read up on loaders and actions since thats what we need to use.</a>
          <br/>
          <a href="https://picocss.com/docs/">Docs for pico css are here.</a>
        </footer>
      </section>
    </main>
  )
}

export default Home