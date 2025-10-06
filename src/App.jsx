import { TattooContextProvider } from "./store/TattooContext.jsx"
import HomePage from "./pages/HomePage.jsx"
import RootLayout from "./pages/RootLayout.jsx";
import Gallery from './pages/Gallery.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "galeria",
        element: <Gallery />,
      }
    ],
    errorElement: <Navigate to="/" replace />,
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
