import { TattooContextProvider } from "./store/TattooContext.jsx"
import HomePage from "./pages/HomePage.jsx"
import RootLayout from "./pages/RootLayout.jsx";
import Gallery from './pages/Gallery.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/tattoo-artist",
    element: <RootLayout />,
    children: [
      {
        path: "/tattoo-artist",
        element: <HomePage />,
      },
      {
        path: "/tattoo-artist/galeria",
        element: <Gallery />,
      }
    ],
    errorElement: <Navigate to="/tattoo-artist" replace />,
  }
]);


function App() {

  return (
    <TattooContextProvider>
      <RouterProvider router={router} />
    </TattooContextProvider>
  )
}

export default App
