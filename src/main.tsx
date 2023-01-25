import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import ThesisIdeas from './pages/thesis-ideas/ThesisIdeas'
import EssayOutline from './pages/essay-outline/EssayOutline'
import Example from './pages/example/Example'
import essayOutlineLoader from './pages/essay-outline/essayOutlineLoader'
import homeLoader from './pages/home/homeLoader'
import exampleLoader from './pages/example/exampleLoader'
import thesisIdeasLoader from './pages/thesis-ideas/thesisIdeasLoader'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader
  },
  {
    path: "/example",
    element: <Example />,
    loader: exampleLoader
  },
  {
    path: "/thesis-ideas",
    element: <ThesisIdeas />,
    loader: thesisIdeasLoader
  },
  {
    path: "/essay-outline/:uuid",
    element: <EssayOutline />,
    loader: essayOutlineLoader
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
