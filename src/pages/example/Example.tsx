import { useState } from 'react'
import { supabase } from '../../supabaseClient'
import './Example.css'

function Example() {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleTodoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    console.log("working...")

    const {data, error} = await supabase.functions.invoke('generateTheses', {
      body: {
        thesisType: "BOOK_THESIS",
        workTitle: "Lord of the Flies",
        authorName: "William Golding"
      }
    })

    setLoading(false)
    console.log("look at data", data)
  }

  if (loading) {
    return (
      <main className="container">
        <section>
          <header>Loading...</header>
        </section>
      </main>
    )
  }

  return (
    <main className="container">
      <section>
        <header>Example Edge Function Call</header>
      </section>
      <section>
        <main className="container">
          <form onSubmit={(e) => handleTodoSubmit(e)}>
            <input type="text" placeholder='Example Submit to test edge function' value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Example Submit</button>
          </form>
        </main>
      </section>
      <section>
        <footer>
          <p>
            This component is also an example of how to structure a component using pico css.
          </p>
          <a href="https://picocss.com/docs/">Docs for pico css are here.</a>
        </footer>
      </section>
    </main>
  )
}

export default Example
